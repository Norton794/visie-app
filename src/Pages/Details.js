import React from 'react';
import { View } from "react-native";
import {format} from 'date-fns';
import { ptBR } from 'date-fns/locale';
export default function Details({ route, navigation }) {

  const { id } = route.params.pessoa.id_pessoa;
  

  const { nome, rg, cpf, data_nascimento, data_admissao, funcao } = route.params.pessoa;
  const pessoa = route.params.pessoa;

  const dataAdmissaoFormatada = format(new Date(data_admissao), 'dd/MM/yyyy', {
    locale: ptBR,
  });
  const dataNascimentoFormatada = format(new Date(data_nascimento), 'dd/MM/yyyy', {
    locale: ptBR,
  });

  const handleEditar = (pessoa) => {
    navigation.navigate("Edit", { pessoa });
  };
  

  
    const handleExcluir = async (id) => {
      if (window.confirm("Tem certeza que deseja excluir esta pessoa?")) {

        try {
          const response = await fetch(`https://visiechallenge-b51dd6dl.b4a.run/api/pessoas/${pessoa.id_pessoa}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (!response.ok) {
            throw new Error('Erro ao excluir os dados da API');
          }
          return response.json();
        } catch (error) {
          throw new Error('Erro ao excluir os dados da API');
        }
      }
    };

  return (
    <View  style={{
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <h2>Detalhes da Pessoa</h2>
      <p>
        <strong>Nome:</strong> {nome}
      </p>
      <p>
        <strong>RG:</strong> {rg}
      </p>
      <p>
        <strong>CPF:</strong> {cpf}
      </p>
      <p>
        <strong>Data de Nascimento:</strong> {dataNascimentoFormatada}
      </p>
      <p>
        <strong>Data de Admissão:</strong> {dataAdmissaoFormatada}
      </p>
      <p>
        <strong>Função:</strong> {funcao ? funcao : 'N/A'}
      </p>
      <button className="botao-editar" onClick={() => handleEditar(pessoa)}>Editar</button>
        <button
          className="botao-excluir"
          onClick={() => handleExcluir(id)}
        >
          Excluir
        </button>
    </View>
  );
};

 
