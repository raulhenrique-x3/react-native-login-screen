import { Avatar } from "react-native-elements";
import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import { Button } from "@rneui/themed";
export const LoginBox = () => {
  return (
    <View>
      <View style={styles.avatarView}>
        <Avatar
          size={"large"}
          rounded
          icon={{ name: "user-circle-o", type: "font-awesome", color: "#000000", size: 80 }}
        />
      </View>

      <SafeAreaView>
        <Text style={styles.formText}>Login</Text>
        <TextInput style={styles.input} />
        <Text style={styles.formText}>Senha</Text>
        <TextInput style={styles.input} />
      </SafeAreaView>

      <SafeAreaView>
        <Button style={styles.userButton}>Login</Button>
        <Button style={styles.userButton} color="error">
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

  formText: {
    fontSize: 18,
    marginBottom: 4,
  },

  input: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: 12,
    backgroundColor: "#fff",
    borderColor: "#cdcdcd",
  },

  userButton: {
    marginTop: 12,
  },
});
