import { useState } from "react";
import { View, Image } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";


  export default function Login({navigation}) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin() {
    if (email !== "" && senha !== "") {
      signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
          console.log("Usuário logado com sucesso!");
          navigation.navigate("Home");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Insira todas as informações");
    }
  }

  return (
    <View>
      <View
        style={{ alignItems: "center", justifyContent: "center", margin: 50 }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Bem vindo(a)</Text>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <View>
          <Image
            source={{ uri: "https://picsum.photos/200" }}
            style={{ width: "200px", height: "200px", borderRadius: 100 }}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              padding: 25,
              backgroundColor: "rgba( 0, 0, 0, 0.09)",
              shadowColor: "#ccc",
              shadowOffset: { width: 0, height: 12 },
              borderRadius: 12,
            }}
          >
            <TextInput
              label="email"
              mode="outlined"
              value={email}
              onChangeText={setEmail}
              placeholder="Digite seu email"
            />
            <TextInput
              label="senha"
              mode="outlined"
              value={senha}
              onChangeText={setSenha}
              placeholder="Digite sua senha"
              secureTextEntry={true} // faz com  que o texte pareça ser uma senha
            />
            <Button 
               style={{
                marginTop: "10px",
                backgroundColor: "#00c2cc",
                borderColor: "#fff",
              }}
              labelStyle={{ color: "#fff" }}
              onPress={handleLogin}>Registre-se</Button>
          </View>
        </View>
      </View>
    </View>
  );
}
