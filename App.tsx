import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { LoginBox } from "./Components/LoginBox";

export default function App() {
  return (
    <View style={styles.container}>
      <LoginBox />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e7ddd7",
    alignItems: "center",
    justifyContent: "center",
  },
});
