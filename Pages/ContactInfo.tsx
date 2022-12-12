import { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { TextInputs } from "../Components/TextInputs";
import axios from "axios";
import { API_URL } from "../const/API_URL";
import { IProps } from "../interface/interface";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@rneui/themed";

export const ContactInfo = ({ route }: IProps, props: IProps) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [id, setId] = useState(null);
  const toContacts = () => props.navigation.navigate("Contatos");

  useEffect(() => {
    if (route.params) {
      const { nome } = route.params;
      const { email } = route.params;
      const { telefone } = route.params;
      const { id } = route.params;

      setNome(nome);
      setEmail(email);
      setTelefone(telefone);
      setId(id);
    }
  }, []);

  function putData() {
    axios
      .put(API_URL + id, {
        nome: nome,
        email: email,
        telefone: telefone,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.error(error.response.data));
  }

  function deleteData() {
    axios
      .delete(API_URL + id)
      .then((res) => {
        setNome("");
        setEmail("");
        setTelefone("");
        setId(null);
      })
      .catch((err) => console.error(err.res.data));
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TextInputs textInput1="Nome" value={nome} onChangeText={(text) => setNome(text)} />
        <TextInputs textInput1="Email" value={email} onChangeText={(text) => setEmail(text)} />
        <TextInputs textInput1="Telefone" value={telefone} onChangeText={(text) => setTelefone(text)} />

        <TouchableOpacity style={styles.userButton} onPress={toContacts}>
          <Button onPress={putData}>Alterar</Button>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userButton}>
          <Button color="error" onPress={deleteData}>
            Excluir
          </Button>
        </TouchableOpacity>
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
