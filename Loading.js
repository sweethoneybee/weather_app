import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <MaterialCommunityIcons
        name="weather-sunny-alert"
        size={80}
        color="black"
      />
      <Text style={styles.text}>오늘의 날씨는...</Text>
      <Text>(@_ @ 두구두구두구 @ _@)</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#FDF6AA",
    alignItems: "center",
  },
  text: {
    paddingTop: 100,
    color: "#2c2c2c",
    fontSize: 30,
    fontWeight: "600",
  },
});
