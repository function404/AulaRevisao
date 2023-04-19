import { useEffect, useState } from "react";
import { View, Image } from "react-native";
import { Text, Button } from "react-native-paper";
import styles from "../utils/styles";

export default function RMGameScreen() {
  const [Personagem, setarPersonagem] = useState(null);
  const [Personagens, setarPersonagens] = useState(0);

  function retornaTotalDePesonagens() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((json) => {
        setarPersonagens(json.info.count);
      });
  }

  function buscaPersonagemAleatorio() {
    fetch("https://rickandmortyapi.com/api/character/" + personagemAleatorio())
      .then((response) => response.json())
      .then((json) => {
        setarPersonagem(json);
      });
  }

  function personagemAleatorio() {
    return Math.floor(Math.random() * Personagens);
  }

  function chekInfoPersonagem(e, t) {
    if(e === "Alive" && t === 1){
      console.log("Você acertou!");
      buscaPersonagemAleatorio();
    }else if (e === "Dead" && t === 0){
      console.log("Você acertou!");
      buscaPersonagemAleatorio();
    }else{
      console.log("Você errou!");
      buscaPersonagemAleatorio();
    }
  }

  useEffect(() => {
    retornaTotalDePesonagens();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.namePersonagem}>
            {Personagem?.name ? Personagem?.name : "Desconhecido"}
          </Text>
        </View>
        <View>
          <Image
            source={{ uri: Personagem?.image }}
            style={{ width: 200, height: 200 }}
          />
        </View>
        <View>
          <Text style={styles.subStatus}>Este personagem esta vivo?</Text>
          <View style={styles.contentButtons}>
            <Button
              style={styles.statusButton}
              labelStyle={{ color: "#fff" }}
              title="Sim"
              onPress={() => chekInfoPersonagem(Personagem?.status, 1)}
            >Sim</Button>
          </View>
          <View style={styles.contentButtons}>
            <Button
              style={styles.statusButton}
              labelStyle={{ color: "#fff" }}
              onPress={() => chekInfoPersonagem(Personagem?.status, 0)}
              title="Não"
            >Não</Button>
          </View>
        </View>
        <View style={styles.contentButtons}>
          <Button
            style={styles.statusButton}
            labelStyle={{ color: "#fff" }}
            title="Buscar Personagem"
            onPress={buscaPersonagemAleatorio}
          >Iniciar o Game</Button>
        </View>
      </View>
    </View>
  );
}
