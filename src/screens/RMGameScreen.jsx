import { useEffect, useState } from "react";
import { View, Image } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/styles";

export default function RMGameScreen() {
  const [personagem, setPersonagem] = useState(null);
  const [personagens, setPersonagens] = useState([]);
  const [totalPersonagens, setTotalPersonagens] = useState(0);

  useEffect(() => {
    retornaTotalDePesonagens();
  }, []);

  function buscaPersonagemAleatorio() {
    fetch(
      "https://rickandmortyapi.com/api/character/" + retornaIndiceAleatorio()
    )
      .then((response) => response.json())
      .then((json) => {
        setPersonagem(json);
      });
  }

  function retornaTotalDePesonagens() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((json) => {
        setTotalPersonagens(json.info.count);
      });
  }

  function retornaIndiceAleatorio() {
    return Math.floor(Math.random() * totalPersonagens);
  }

  function checkIfPersonagemEstaVivo( qualquerMerda ) {
    if (qualquerMerda === "Alive") {
      return "Vivo";
    } else if (qualquerMerda === "Dead") {
      return "Morto";
    } else {
      return "Desconhecido";
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: personagem?.image }}
        style={{ width: 200, height: 200 }}
      />
      <Text>
        Personagem: {personagem?.name ? personagem?.name : "Desconhecido"}
      </Text>
      <Text>Status: {checkIfPersonagemEstaVivo(personagem?.status)}</Text>
      <Button 
      style={{
        marginTop: "10px",
        backgroundColor: "#00c2cc",
        borderColor: "#fff",
      }}
      labelStyle={{ color: "#fff" }}
      onPress={buscaPersonagemAleatorio}
      mode="outlined"
      >Buscar Personagem</Button>
    </View>
  );
}