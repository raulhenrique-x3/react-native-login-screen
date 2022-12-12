import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInputs } from "../Components/TextInputs";
import { Button } from "@rneui/themed";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../const/API_URL";

export const AddContact = () => {
  const [addName, setAddName] = useState("");
  const [addTel, setAddTel] = useState("");
  const [addEmail, setAddEmail] = useState("");

  async function postData() {
    await axios
      .post(API_URL, {
        nome: addName,
        telefone: addTel,
        cpf: addEmail,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }

  const setName = (text: string) => {
    setAddName(text);
  };

  const setTel = (text: string) => {
    setAddTel(text);
  };

  const setEmail = (text: string) => {
    setAddEmail(text);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TextInputs textInput1="Nome" value={addName} onChangeText={setName} />
        <TextInputs textInput1="Email" value={addTel} onChangeText={setTel} />
        <TextInputs textInput1="Telefone" value={addEmail} onChangeText={setEmail} />

        <Button style={styles.userButton} onPress={postData}>
          Salvar
        </Button>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e7ddd7",
    alignItems: "center",
    justifyContent: "center",
  },

  userButton: {
    marginTop: 12,
  },
});
