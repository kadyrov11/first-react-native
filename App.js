import { StyleSheet, SafeAreaView } from "react-native";

import Navigation from "./navigation";

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 10,
  },
});
