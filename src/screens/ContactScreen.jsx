import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import styles from "../utils/styles";

export default function ContactScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Olá eu sou a Contact Screen</Text>
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
    </View>
  );
}
