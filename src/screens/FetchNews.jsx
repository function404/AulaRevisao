import { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import { Text, ToggleButton } from "react-native-paper";
import { ScrollView, Image } from "react-native-web";
import styles from "../utils/styles";

export default function FetchNews() {
  const [data, setData] = useState([]);

  function fetchNewsData() {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((reponse) => reponse.json())
      .then((json) => setData(json.results))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    fetchNewsData();
  }, []);

  const dimensions = Dimensions.get("window");
  const imageHeight = Math.round((dimensions.width * 9) / 16);
  const imageWidth = dimensions.width;

  return (
    <View style={styles.container}>
      <View>
        <Text>Menu</Text>
        <ToggleButton
          icon="bluetooth"
          value="bluetooth"
          onPress={(value) =>
            this.setState({
              status: value === "checked" ? "unchecked" : "checked",
            })
          }
        />
      </View>
      <ScrollView style={styles.scrollview}>
        {data.map((item) => (
          <View style={styles.containerItem}>
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
