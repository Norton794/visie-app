// import React, { useState } from 'react';
// import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

// const Cad = ({ navigation }) => {
//   const [nome, setNome] = useState('');
//   const [rg, setRg] = useState('');
//   const [cpf, setCpf] = useState('');
//   const [dataNascimento, setDataNascimento] = useState('');
//   const [dataAdmissao, setDataAdmissao] = useState('');
//   const [funcao, setFuncao] = useState('');

//   const handleCad = async () => {
//     try {
//       const data = {
//         nome: nome,
//         rg: rg,
//         cpf: cpf,
//         data_nascimento: dataNascimento,
//         data_admissao: dataAdmissao,
//         funcao: funcao,
//       };

//       const response = await fetch('https://visiechallenge-b51dd6dl.b4a.run/api/pessoas', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         throw new Error('Erro ao adicionar os dados à API');
//       }

//       console.log('Dados adicionados com sucesso:', data);
//       navigation.navigate("Home");
//     } catch (error) {
//       console.error('Erro ao adicionar os dados à API:', error.message);
//     }
//   };

//   const handleGoBack = () => {
//     navigation.goBack();
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Adicionar Pessoa</Text>
//       <TextInput
//         style={styles.input}
//         value={nome}
//         onChangeText={setNome}
//         placeholder="Nome"
//         accessibilityLabel="Campo de entrada para o nome"
//       />
//       <TextInput
//         style={styles.input}
//         value={rg}
//         onChangeText={setRg}
//         placeholder="RG"
//         accessibilityLabel="Campo de entrada para o RG"
//       />
//       <TextInput
//         style={styles.input}
//         value={cpf}
//         onChangeText={setCpf}
//         placeholder="CPF"
//         accessibilityLabel="Campo de entrada para o CPF"
//       />
//       <TextInput
//         style={styles.input}
//         value={dataNascimento}
//         onChangeText={setDataNascimento}
//         placeholder="Data de Nascimento"
//         accessibilityLabel="Campo de entrada para a data de nascimento"
//       />
//       <TextInput
//         style={styles.input}
//         value={dataAdmissao}
//         onChangeText={setDataAdmissao}
//         placeholder="Data de Admissão"
//         accessibilityLabel="Campo de entrada para a data de admissão"
//       />
//       <TextInput
//         style={styles.input}
//         value={funcao}
//         onChangeText={setFuncao}
//         placeholder="Função"
//         accessibilityLabel="Campo de entrada para a função"
//       />

//       <Button
//         title="Adicionar"
//         onPress={handleCad}
//         accessibilityLabel="Botão para adicionar uma nova pessoa"
//       />
//       <br/><br/>

//       <Button
//         style={styles.button}
//         title="Cancelar"
//         onPress={handleGoBack}
//         accessibilityLabel="Botão para cancelar a adição"
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   heading: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     marginVertical: 10,
//     padding: 10,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//   },
//   button: {
//     color: 'gray',
//     marginTop: '10px',
//   },
// });

// export default Cad;


import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const Cad = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [rg, setRg] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [dataAdmissao, setDataAdmissao] = useState('');
  const [funcao, setFuncao] = useState('');

  const handleCad = async () => {
    try {
      const data = {
        nome: nome,
        rg: rg,
        cpf: cpf,
        data_nascimento: dataNascimento,
        data_admissao: dataAdmissao,
        funcao: funcao,
      };

      const response = await fetch('https://visiechallenge-b51dd6dl.b4a.run/api/pessoas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Erro ao adicionar os dados à API');
      }

      console.log('Dados adicionados com sucesso:', data);
      navigation.navigate("Home");
    } catch (error) {
      console.error('Erro ao adicionar os dados à API:', error.message);
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Adicionar Pessoa</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome"
        accessibilityLabel="Campo de entrada para o nome"
      />
      <TextInput
        style={styles.input}
        value={rg}
        onChangeText={setRg}
        placeholder="RG"
        accessibilityLabel="Campo de entrada para o RG"
      />
      <TextInput
        style={styles.input}
        value={cpf}
        onChangeText={setCpf}
        placeholder="CPF"
        accessibilityLabel="Campo de entrada para o CPF"
      />
      <TextInput
        style={styles.input}
        value={dataNascimento}
        onChangeText={setDataNascimento}
        placeholder="Data de Nascimento"
        accessibilityLabel="Campo de entrada para a data de nascimento"
        type="date"
      />
      <TextInput
        style={styles.input}
        value={dataAdmissao}
        onChangeText={setDataAdmissao}
        placeholder="Data de Admissão"
        accessibilityLabel="Campo de entrada para a data de admissão"
        type="date"
      />
      <TextInput
        style={styles.input}
        value={funcao}
        onChangeText={setFuncao}
        placeholder="Função"
        accessibilityLabel="Campo de entrada para a função"
      />

      <Button
        title="Adicionar"
        onPress={handleCad}
        accessibilityLabel="Botão para adicionar uma nova pessoa"
      />
      <Button
        style={styles.button}
        title="Cancelar"
        onPress={handleGoBack}
        accessibilityLabel="Botão para cancelar a adição"
      />
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
    marginTop: 10,
  },
});

export default Cad;
