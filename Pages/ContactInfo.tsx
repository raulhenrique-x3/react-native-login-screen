import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TextInputs } from "../Components/TextInputs";
import axios from "axios";
import { API_URL } from "../const/API_URL";
import { IProps } from "../interface/interface";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@rneui/themed";

export const ContactInfo = ({ id }: IProps) => {
  const [data, setData] = useState<IProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`${API_URL}/ ${id}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Carregando...</Text>
      ) : (
        <SafeAreaView>
          <TextInputs textInput1="Nome" value={data?.[0]?.nome} />
          <TextInputs textInput1="Email" value={data?.[0]?.email} />
          <TextInputs textInput1="Telefone" value={data?.[0]?.telefone} />

          <TouchableOpacity style={styles.userButton}>
            <Button>Alterar</Button>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userButton}>
            <Button color="error">Excluir</Button>
          </TouchableOpacity>
        </SafeAreaView>
      )}
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
