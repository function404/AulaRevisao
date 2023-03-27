import { useState } from "react";
import { View } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { Button, Paragraph, TextInput } from "react-native-paper";
import styles from "../utils/styles";

export default function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [Senhac, setSenhac] = useState("");

  function handleRegister() {
    if(email !== "" && senha !== "" && nome !== "" && Senhac !== "") {
      if(senha !== Senhac) {
        alert('Senha não conferem');
        return;
      }
      createUserWithEmailAndPassword(auth, email, senha).then((userCredential) => {
        alert('Usuário cadastrado com sucesso!');
        navigation.navigate('Login');
      }).catch((error) => {
        alert(error);
      })
    }else{
      alert('Insira todas as informações');
      return;
    }
  }      

  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <View
        style={{
          padding: 25,
          backgroundColor: "rgba( 0, 0, 0, 0.09)",
          shadowColor: "#ccc",
          shadowOffset: { width: 0, height: 12 },
          borderRadius: 12,
        }}
      >
        <Paragraph>Realize seu cadastro {nome} </Paragraph>
        <TextInput
          style={{
            margin: 5,
          }}
          label={"E-email"}
          placeholder={"Digite seu email"}
          value={email}
          onChangeText={setEmail}
          mode="outlined"
        />
        <TextInput
          style={{
            margin: 5,
          }}
          label={"Nome"}
          placeholder={"Escreva seu nome"}
          value={nome}
          onChangeText={setNome}
          mode="outlined"
        />
        <TextInput
          style={{
            margin: 5,
          }}
          label={"Senha"}
          placeholder={"Digite sua senha"}
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
          mode="outlined"
        />
        <TextInput
          style={{
            margin: 5,
          }}
          label={"Confirmar senha"}
          placeholder={"Confirme sua senha"}
          secureTextEntry={true}
          value={Senhac}
          onChangeText={setSenhac}
          mode="outlined"
        />
        <Button onPress={handleRegister}>Registre-se</Button>
      </View>
    </View>
  );
}
