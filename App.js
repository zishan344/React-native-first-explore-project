import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AllCountry from "./Component/AllCountry";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Visiting Country!</Text>
      <StatusBar style="auto" />
      <AllCountry />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
