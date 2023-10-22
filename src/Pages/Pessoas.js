import Pessoa from "./Pessoa";
import { View, FlatList, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";

function Pessoas({ navigation }) {
  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {
    const fetchPessoas = async () => {
      try {
        const response = await fetch("https://visiechallenge-b51dd6dl.b4a.run/api/pessoas/");
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados da API.");
        }
        const data = await response.json();
        setPessoas(data);
        console.log(data);
      } catch (error) {
        console.error("Erro ao obter dados da API:", error);
      }
    };

    fetchPessoas();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FlatList
        data={pessoas}
        keyExtractor={(pessoa) => pessoa.id_pessoa.toString()}
        renderItem={({ item }) => <Pessoa pessoa={item} navigation={navigation} />}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: "#f7f7f7" }} />
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

export default Pessoas;

