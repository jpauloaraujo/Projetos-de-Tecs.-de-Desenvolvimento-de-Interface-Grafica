import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const SignInScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Login</Text>
      <Button
        title="Ir para Sign Up"
        onPress={() => navigation.navigate("SignUp")}
      />
    </View>
  );
};

const SignUpScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Inscrição</Text>
      <Button
        title="Ir para Main"
        onPress={() => navigation.navigate("Main")}
      />
    </View>
  );
};

const HomeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Home Screen (Woofs em Alta)</Text>
  </View>
);

const FeedScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Feed Screen (Novos Posts)</Text>
  </View>
);

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Main" component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
});
