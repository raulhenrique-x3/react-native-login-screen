import { Avatar } from "react-native-elements";
import { StyleSheet, View, SafeAreaView, TouchableOpacity } from "react-native";
import { Button } from "@rneui/themed";
import { TextInputs } from "./TextInputs";

interface IProps {
  navigation: any;
}

export const LoginBox = (props: IProps) => {
  const login = () => props.navigation.navigate("Contatos");
  const register = () => props.navigation.navigate("Cadastro");

  return (
    <View>
      <View style={styles.avatarView}>
        <Avatar
          size={"large"}
          rounded
          icon={{ name: "user-circle-o", type: "font-awesome", color: "#000000", size: 72 }}
        />
      </View>

      <TextInputs textInput1="Login" value="" />
      <TextInputs textInput1="Senha" value="" />

      <SafeAreaView>
        <TouchableOpacity style={styles.userButton}>
          <Button onPress={login}>Login</Button>
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
