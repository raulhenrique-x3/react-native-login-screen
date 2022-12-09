import { Button } from "@rneui/themed";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { TextInputs } from "./TextInputs";

export const RegisterBox = () => {
  return (
    <View style={styles.RegisterBoxContainer}>
      <SafeAreaView>
        <TextInputs textInput1="Email" value="" />
        <TextInputs textInput1="Senha" value="" />
        <Button style={styles.saveInfoButton}>Salvar</Button>
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
