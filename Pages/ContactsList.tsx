import axios from "axios";
import { View, ScrollView, StyleSheet } from "react-native";
import { API_URL } from "../const/API_URL";
import { useEffect, useState } from "react";
import { Avatar, Icon } from "react-native-elements";
import { Button, ListItem, Header } from "@rneui/themed";
import { IProps } from "../interface/interface";

export const ContactList = (props: IProps) => {
  const [data, setData] = useState<IProps[]>([]);
  const [loading, setLoading] = useState(true);

  const addContact = () => {
    props.navigation.navigate("Adicionar");
  };

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(API_URL)
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
      <Header
        placement="center"
        centerComponent={{ text: "Lista de Contatos", style: { color: "#fff", fontSize: 24, fontWeight: "500" } }}
        rightComponent={
          <Button
            icon={<Icon name="plus" type="feather" size={24} color="white" tvParallaxProperties={undefined} />}
            onPress={addContact}
          />
        }
      />
      {loading ? (
        <Button title="Solid" type="solid" loading />
      ) : (
        <ScrollView>
          {data.map((contact) => (
            <ListItem
              key={contact?.id}
              bottomDivider
              onPress={() =>
                props.navigation.navigate("Informações", {
                  nome: contact?.nome,
                  telefone: contact?.telefone,
                  email: contact?.email,
                  id: contact?.id,
                })
              }
            >
              <Avatar
                size={"large"}
                rounded
                icon={{ name: "user-circle-o", type: "font-awesome", color: "#000000", size: 72 }}
              />
              <ListItem.Content>
                {contact?.nome == "undefined" || contact?.nome == "" ? (
                  <ListItem.Title>Usuário sem nome</ListItem.Title>
                ) : (
                  <ListItem.Title>{contact?.nome}</ListItem.Title>
                )}
                {contact?.telefone == "undefined" || contact?.telefone == "" ? (
                  <ListItem.Title>Sem telefone</ListItem.Title>
                ) : (
                  <ListItem.Title>{contact?.telefone}</ListItem.Title>
                )}
              </ListItem.Content>
            </ListItem>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
