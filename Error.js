import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Error() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <MaterialCommunityIcons
        name="emoticon-sad-outline"
        size={80}
        color="black"
      />
      <Text style={styles.text}>뭔가 잘못되었습니다</Text>
      <Text>앱을 재실행해주세요</Text>
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
