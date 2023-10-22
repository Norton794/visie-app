// Pessoa.js
import React from "react";
import { Button } from "react-native";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import "./Pessoa.css";


const Pessoa = ({ pessoa, navigation }) => {
  const { id_pessoa, nome, data_admissao } = pessoa;

  const primeiroNome = nome.split(" ")[0];
  const dataAdmissaoFormatada = format(new Date(data_admissao), "dd/MM/yyyy", {
    locale: ptBR,
  });

  
  const handleVerMais = (pessoa) => {
    navigation.navigate("Details", { pessoa });
  };
  
  const handleEditar = (pessoa) => {
  navigation.navigate("Edit", { pessoa });
};

  const deleteData = async (url, id) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Erro ao excluir os dados da API');
      }
      return response.json();
    } catch (error) {
      throw new Error('Erro ao excluir os dados da API');
    }
  };

  const handleExcluir = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir esta pessoa?")) {
      try {
        await deleteData(
          "https://visiechallenge-b51dd6dl.b4a.run/api/pessoas",
          id
        );
      } catch (error) {
        console.error("Erro ao excluir os dados da API:", error.message);
      }
    }
  };

  return (
    <div className="pessoa-container">
      <div>
        <p>
          <strong>Nome:</strong> {primeiroNome}
        </p>
        <p>
          <strong>Data de Admissão:</strong> {dataAdmissaoFormatada}
        </p>
      </div>
      <div className="botoes-container">
        <button
          className="botao-ver-mais"
          onClick={() => handleVerMais(pessoa)}
        >
          Ver Mais
        </button>
        <button className="botao-editar" onClick={() => handleEditar(pessoa)}>Editar</button>
        <button
          className="botao-excluir"
          onClick={() => handleExcluir(id_pessoa)}
        >
          Excluir
        </button>
      </div>
    </div>
  );
};

export default Pessoa;
