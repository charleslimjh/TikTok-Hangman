import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

let word; // word placeholder
let lives; // current lives placeholder
let char; // character keyed in placeholder

function livesLeft(word, lives, char) {
  let wordArray = word.split("");

  if (wordArray.includes(char)) {
    lives += 0;
  } else {
    lives -= 1;
  }
  return lives;
}

let lives_left = livesLeft(word, lives, char);

export default function LivesCounter() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>You have {lives_left} lives left</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
