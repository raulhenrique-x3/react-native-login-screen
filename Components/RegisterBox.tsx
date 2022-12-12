import { Button } from "@rneui/themed";
import axios from "axios";
import { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { TextInputs } from "./TextInputs";

export const RegisterBox = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  async function userRegister() {
    await axios
      .post(" http://192.168.56.1:5000/users/", {
        username: registerEmail,
        password: registerPassword,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }

  return (
    <View style={styles.RegisterBoxContainer}>
      <SafeAreaView>
        <TextInputs textInput1="Email" value={registerEmail} onChangeText={(text) => setRegisterEmail(text)} />
        <TextInputs textInput1="Senha" value={registerPassword} onChangeText={(text) => setRegisterPassword(text)} />
        <Button style={styles.saveInfoButton} onPress={userRegister}>
          Salvar
        </Button>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  RegisterBoxContainer: {
    flex: 1,
    backgroundColor: "#e7ddd7",
    alignItems: "center",
    justifyContent: "center",
  },

  saveInfoButton: {
    marginTop: 12,
  },
});
