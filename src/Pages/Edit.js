

import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const Edit = ({ route, navigation }) => {
  const { pessoa } = route.params;
  const [nome, setNome] = useState(pessoa.nome);
  const [rg, setRg] = useState(pessoa.rg);
  const [cpf, setCpf] = useState(pessoa.cpf);
  const [dataNascimento, setDataNascimento] = useState(pessoa.data_nascimento);
  const [dataAdmissao, setDataAdmissao] = useState(pessoa.data_admissao);
  const [funcao, setFuncao] = useState(pessoa.funcao);

  const handleEdit = async () => {
    try {
      const data = {
        ...pessoa,
        nome: nome,
        rg: rg,
        cpf: cpf,
        data_nascimento: dataNascimento,
        data_admissao: dataAdmissao,
        funcao: funcao,
      };

      const response = await fetch(`https://visiechallenge-b51dd6dl.b4a.run/api/pessoas/${pessoa.id_pessoa}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar os dados da API');
      }

      console.log('Dados atualizados com sucesso:', data);
    } catch (error) {
      console.error('Erro ao atualizar os dados da API:', error.message);
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Editar Pessoa</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome"
        accessibilityLabel="Campo de entrada para editar o nome"
      />
      <TextInput
        style={styles.input}
        value={rg}
        onChangeText={setRg}
        placeholder="RG"
        accessibilityLabel="Campo de entrada para editar o RG"
      />
      <TextInput
        style={styles.input}
        value={cpf}
        onChangeText={setCpf}
        placeholder="CPF"
        accessibilityLabel="Campo de entrada para editar o CPF"
      />
      <TextInput
        style={styles.input}
        value={format(new Date(dataNascimento), 'dd/MM/yyyy', {
          locale: ptBR,
        })}
        onChangeText={setDataNascimento}
        placeholder="Data de Nascimento"
        accessibilityLabel="Campo de entrada para editar a data de nascimento"
      />
      <TextInput
        style={styles.input}
        value={format(new Date(dataAdmissao), 'dd/MM/yyyy', {
          locale: ptBR,
        })}
        onChangeText={setDataAdmissao}
        placeholder="Data de Admissão"
        accessibilityLabel="Campo de entrada para editar a data de admissão"
      />
      <TextInput
        style={styles.input}
        value={funcao}
        onChangeText={setFuncao}
        placeholder="Função"
        accessibilityLabel="Campo de entrada para editar a função"
      />

<Button
        title="Editar"
        onPress={handleEdit}
        accessibilityLabel="Botão para salvar as alterações"
      />

<Button style={styles.button} title="Cancelar" onPress={handleGoBack} accessibilityLabel="Botão para descartar as alterações" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    marginVertical: 10,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    color: 'gray',
    marginTop: '10px'
  }
});

export default Edit;
