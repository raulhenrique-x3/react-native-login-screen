import { Avatar } from "react-native-elements";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { Button } from "@rneui/themed";
import { TextInputs } from "./TextInputs";

interface IProps {
  navigation: any;
}

export const LoginBox = (props: IProps) => {
  const register = () => props.navigation.navigate("Cadastro");

  return (
    <View>
      <View style={styles.avatarView}>
        <Avatar
          size={"large"}
          rounded
          icon={{ name: "user-circle-o", type: "font-awesome", color: "#000000", size: 80 }}
        />
      </View>

      <TextInputs textInput1="Login" textInput2="Senha" />

      <SafeAreaView>
        <Button style={styles.userButton}>Login</Button>
        <Button onPress={register} style={styles.userButton} color="error">
          Cadastre-se
        </Button>
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
    marginTop: 12,
  },
});
