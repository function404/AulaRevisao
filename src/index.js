import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// screens
import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import SplashScreen from "./screens/SplashScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LoginScreen from "./screens/login";

// import Main from "./components/src/components/main";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="IMG" component={Main} /> */}
        <Stack.Screen
          name="TabsNavigation"
          component={TabsNavigation}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Sobre" component={AboutScreen} />
        <Stack.Screen name="Contato" component={ContactScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Tabs = createMaterialBottomTabNavigator();

function TabsNavigation() {
  return (
    <Tabs.Navigator
      initialRouteName="Inicio"
      activeColor="#000" // cor do texto ativado
      inactiveColor="#000" // cor do texto inativo
      barStyle={{ backgroundColor: "rgba(0, 194, 204, 0.1)" }}
    >
      <Tabs.Screen
        style={{ fontWeight: "bold" }}
        name="Inicio"
        component={HomeScreen}
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={"#00c2cc"} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="Sobre"
        component={AboutScreen}
        options={{
          tabBarLabel: "Sobre",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={"#00c2cc"} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarLabel: "Login",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account"
              color={"#00c2cc"}
              size={26}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
