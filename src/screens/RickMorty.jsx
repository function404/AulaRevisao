import { useEffect, useState } from "react";
import { View, Dimensions, ScrollView, Image } from "react-native";
import { Text, Button } from "react-native-paper";
import styles from "../utils/styles";

export default function RickMorty() {
  const [data, setData] = useState([]);
  const [buscaBt, setBuscaBt] = useState({
    gender: "",
    status: "",
  });

  useEffect(() => {
    // construir a URL da API com base nas opções de busca
    const apiUrl = `https://rickandmortyapi.com/api/character?${buscaBt.status}${buscaBt.gender}`;

    // buscar, requerer as informações externas
    fetch(apiUrl)
      // essas informações chegam via promessa
      // vamos tentar converte-las em Json
      .then((data) => data.json())
      // depois eu vou preencher, popular a variável data
      .then((dataJson) => setData(dataJson.results))
      // caso ocorra erros eu mostro o erro no console
      .catch((error) => {
        console.log(error);
      });
  }, [buscaBt.status, buscaBt.gender]);

  const handleStatusFilter = (status) => {
    setBuscaBt({
      ...buscaBt,
      status: `&status=${status}`,
    });
  };

  const handleGenderFilter = (gender) => {
    setBuscaBt({
      ...buscaBt,
      gender: `&gender=${gender}`,
    });
  };

  const dimensions = Dimensions.get("window");
  const imageHeight = Math.round((dimensions.width * 9) / 16);
  const imageWidth = dimensions.width;

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>Status do personagem: </Text>
          <Button onPress={() => handleStatusFilter("alive")}>Vivo</Button>
          <Button onPress={() => handleStatusFilter("dead")}>Morto</Button>
          <Button onPress={() => handleStatusFilter("unknown")}>
            Desconhecido
          </Button>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>Gênero: </Text>
          <Button onPress={() => handleGenderFilter("male")}>Masculino</Button>
          <Button onPress={() => handleGenderFilter("female")}>Feminino</Button>
          <Button onPress={() => handleGenderFilter("genderless")}>
            Sem Gênero
          </Button>
          <Button onPress={() => handleGenderFilter("unknown")}>
            Desconhecido
          </Button>
        </View>
      </View>

      <ScrollView style={styles.scrollview}>
        {data.map((item) => (
          <View style={styles.containerItem} key={item.id}>
            <View style={styles.contentItem}>
              <View style={styles.asddasasdasd}>
                <Image
                  source={{ uri: item.image }}
                  resizeMode={"cover"}
                  style={[{ width: imageWidth, height: imageHeight }]}
                />
              </View>
              <View style={styles.chad}>
                <View>
                  <Text style={[styles.char, styles.name]} key={item.id}>
                    {item.name}
                  </Text>
                </View>
                <View>
                  <Text style={styles.char} key={item.id}>
                    Espécie:{" "}
                    {item.species === "Human" ? "Humano" : "Não Humano"}
                  </Text>
                </View>
                <View>
                  <Text style={styles.char} key={item.id}>
                    Gênero: {item.gender === "Male" ? "Masculino" : "Feminino"}
                  </Text>
                </View>
                <View>
                  <Text style={styles.char} key={item.id}>
                    Episódios ao total:{" "}
                    {item.status === "Alive"
                      ? "Vivo"
                      : item.status === "unknown"
                      ? "Desconhecido"
                      : " Morto"}
                  </Text>
                </View>
                <View>
                  <Text style={styles.char} key={item.id}>
                    {item.episode.length}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
