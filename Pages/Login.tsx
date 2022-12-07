import { View, StyleSheet } from "react-native";
import { LoginBox } from "../Components/LoginBox";

export const Login = (props: any) => {
  return (
    <View style={styles.container}>
      <LoginBox navigation={props.navigation} />
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
});
