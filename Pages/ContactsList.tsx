import axios from "axios";
import { View, ScrollView } from "react-native";
import { API_URL } from "../const/API_URL";
import { useEffect, useState } from "react";
import { Avatar, Icon } from "react-native-elements";
import { Button, ListItem, Header } from "@rneui/themed";
import { IProps } from "../interface/interface";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const ContactList = (props: IProps) => {
  const [data, setData] = useState<IProps[]>([]);
  const [loading, setLoading] = useState(true);
  const contactInfo = () => {
    props.navigation.navigate("Informações");
  };

  const addContact = () => {
    props.navigation.navigate("AddContato");
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
    <View>
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
            <ListItem key={contact?.id} bottomDivider onPress={contactInfo}>
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
