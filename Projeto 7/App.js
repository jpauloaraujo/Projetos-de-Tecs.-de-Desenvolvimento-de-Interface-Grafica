import React from "react";
import {
  ScrollView,
  Button,
  Alert,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { Formik } from "formik";
import InputWithLabel from "./InputWithLabel";

export default function App() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
    >
      <Text style={styles.title}>Woofstagram 🐾</Text>

      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
          petName: "",
          petBirthday: "",
          breed: "",
          favoriteToy: "",
        }}
        onSubmit={(values) => {
          if (values.password !== values.confirmPassword) {
            Alert.alert("Erro", "As senhas não coincidem!");
            return;
          }

          console.log("Dados do cadastro:", values);
          Alert.alert("Sucesso!", `O pet ${values.petName} foi cadastrado!`);
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View>
            <InputWithLabel
              label="E-mail"
              placeholder="Digite seu e-mail"
              value={values.email}
              onChangeText={handleChange("email")}
            />
            <InputWithLabel
              label="Senha"
              placeholder="Digite sua senha"
              value={values.password}
              onChangeText={handleChange("password")}
              secureTextEntry={true}
            />
            <InputWithLabel
              label="Confirmar Senha"
              placeholder="Confirme a senha"
              value={values.confirmPassword}
              onChangeText={handleChange("confirmPassword")}
              secureTextEntry={true}
            />
            <InputWithLabel
              label="Nome do Pet"
              placeholder="Qual o nome do bichinho?"
              value={values.petName}
              onChangeText={handleChange("petName")}
            />
            <InputWithLabel
              label="Data de Aniversário"
              placeholder="DD/MM/AAAA"
              value={values.petBirthday}
              onChangeText={handleChange("petBirthday")}
            />
            <InputWithLabel
              label="Raça"
              placeholder="Qual a raça do seu pet?"
              value={values.breed}
              onChangeText={handleChange("breed")}
            />
            <InputWithLabel
              label="Brinquedo Favorito"
              placeholder="Ex: Bolinha, Ossinho de borracha"
              value={values.favoriteToy}
              onChangeText={handleChange("favoriteToy")}
            />

            <View style={styles.buttonContainer}>
              <Button
                onPress={handleSubmit}
                title="Criar Conta"
                color="#e91e63"
              />
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    padding: 20,
    paddingTop: 50,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  buttonContainer: {
    marginTop: 15,
  },
});
