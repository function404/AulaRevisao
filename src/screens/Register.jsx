import { View } from "react-native";
import { Paragraph, Text, TextInput } from "react-native-paper";
import styles from "../utils/styles";

export default function Register({ navigation }) {
  return (
    <View>
      <View>
        <Paragraph>Realize seu cadastro</Paragraph>
        <TextInput label={"E-email"} placeholder={"Digite seu email"} />
        <TextInput placeholder={"Digite sua senha"} secureTextEntry={true} />
      </View>
    </View>
  );
}
