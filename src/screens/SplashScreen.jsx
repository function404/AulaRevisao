import { View } from "react-native";
import { Text, ActivityIndicator } from "react-native-paper";

export default function SplashScreeen({ navigation }) {
  setTimeout(() => {
    navigation.navigate("TabsNavigation");
  }, 1500);

  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <ActivityIndicator animating={true} color="#00c2cc" />
      <Text>Aguarde . . .</Text>
    </View>
  );
}
