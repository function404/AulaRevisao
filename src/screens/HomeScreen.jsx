import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import styles from "../utils/styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: "22px", fontWeight: "bold" }}>
        Olá eu sou o mestre dos magos
      </Text>
      <Button
        style={{
          marginTop: "10px",
          backgroundColor: "#00c2cc",
          borderColor: "#fff",
        }}
        labelStyle={{ color: "#fff" }}
        mode="outlined"
        onPress={() => {
          navigation.navigate("Sobre");
        }}
      >
        Sobre
      </Button>
      <Button
        style={{
          marginTop: "10px",
          backgroundColor: "#00c2cc",
          borderColor: "#fff",
        }}
        labelStyle={{ color: "#fff" }}
        mode="outlined"
        onPress={() => {
          navigation.navigate("Contato");
        }}
      >
        Contato
      </Button>
    </View>
  );
}
