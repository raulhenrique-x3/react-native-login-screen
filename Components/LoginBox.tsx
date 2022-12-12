import { Avatar } from "react-native-elements";
import { StyleSheet, View, SafeAreaView, TouchableOpacity } from "react-native";
import { Button } from "@rneui/themed";
import { TextInputs } from "./TextInputs";
import { IProps } from "../interface/interface";
import { useEffect, useState } from "react";
import axios from "axios";

export const LoginBox = (props: IProps) => {
  const [userLogin, setUserLogin] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const login = () => props.navigation.navigate("Contatos");
  const register = () => props.navigation.navigate("Cadastro");

  async function LoginUser() {
    await axios
      .get(`http://192.168.56.1:5000/users/login/${userLogin}/${userPassword}`)
      .then((res) => {
        console.log(res);
        if (res.data.length > 0) {
          login();
        } else return;
      })
      .catch((err) => console.log(err));
  }

  return (
    <View>
      <View style={styles.avatarView}>
        <Avatar
          size={"large"}
          rounded
          icon={{ name: "user-circle-o", type: "font-awesome", color: "#000000", size: 72 }}
        />
      </View>

      <TextInputs textInput1="Login" value={userLogin} onChangeText={(text) => setUserLogin(text)} />
      <TextInputs textInput1="Senha" value={userPassword} onChangeText={(text) => setUserPassword(text)} />

      <SafeAreaView>
        <TouchableOpacity style={styles.userButton}>
          <Button onPress={LoginUser}>Login</Button>
        </TouchableOpacity>

        <TouchableOpacity style={styles.userButton}>
          <Button onPress={register} color="error">
            Cadastre-se
          </Button>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarView: {
    display: "flex",
    alignItems: "center",
  },

  userButton: {
    marginBottom: 12,
  },
});
