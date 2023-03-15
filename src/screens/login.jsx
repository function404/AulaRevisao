import { View, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";
import styles from "../utils/styles";

export default function LoginScreen({ navigation }) {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <View>
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={{ width: "200px", height: "200px", borderRadius: 100 }}
        />
      </View>
      <View>
        <TextInput
          label="email"
          mode="outlined"
          placeholder="Digite seu email"
        />
        <TextInput
          label="senha"
          mode="outlined"
          placeholder="Digite sua senha"
          secureTextEntry={true} // faz com  que o texte pareça ser uma senha
        />
      </View>
    </View>
  );
}
