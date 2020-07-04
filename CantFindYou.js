import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CantFindYou() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <MaterialCommunityIcons
        name="emoticon-sad-outline"
        size={80}
        color="black"
      />
      <Text style={styles.text}>위치를 찾을 수 없어요</Text>
      <Text>설정에서 위치 허가 켜주세요 ㅠㅠ</Text>
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
