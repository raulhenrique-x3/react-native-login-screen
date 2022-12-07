import { StyleSheet, Text, SafeAreaView, TextInput } from "react-native";

interface IProps {
  textInput1: string;
  textInput2: string;
}

export const TextInputs = ({ textInput1, textInput2 }: IProps) => {
  return (
    <SafeAreaView>
      <Text style={styles.formText}>{textInput1}</Text>
      <TextInput style={styles.input} />
      <Text style={styles.formText}>{textInput2}</Text>
      <TextInput style={styles.input} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
});
