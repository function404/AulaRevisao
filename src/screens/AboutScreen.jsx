import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import styles from "../utils/styles";

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Sou a página de About</Text>
      <Button
        style={{
          marginTop: "10px",
          backgroundColor: "#00c2cc",
          borderColor: "#fff",
        }}
        labelStyle={{ color: "#fff" }}
        mode="outlined"
        onPress={() => {
          navigation.navigate("Inicio");
        }}
      >
        Início
      </Button>
    </View>
  );
}
