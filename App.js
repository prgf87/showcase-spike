import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const fetchImage = async () => {
    const response = await fetch(
      "https://unsplash.com/photos/a-picture-of-a-tree-with-white-lines-on-it-yJDDRS6U9OQ",
      {
        method: "GET",
        mode: "no-cors",
      }
    );
    console.log(response);
  };

  useEffect(() => {
    fetchImage().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
