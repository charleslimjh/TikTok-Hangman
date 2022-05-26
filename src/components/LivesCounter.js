import { useState } from "react";

function LivesCounter(props) {
  const [image, setImage] = useState(displayHangman(props.livesLeft));

  //to animate
  function displayHangman(lives) {
    // dead state: head, torso, both arms, and both legs
    const hangman = [
      `--------
                   |      |
                   |      O
                   |     \|/
                   |      |
                   |     / \
                   -
    `,
      // state: head, torso, both arms, and one leg
      `
      --------
                   |      |
                   |      O
                   |     \|/
                   |      |
                   |     / 
                   -
    `,
      // state: head, torso, both arms
      `
      --------
                   |      |
                   |      O
                   |     \|/
                   |      |
                   |      
                   -
    `,
      // state: head, torso, one arm
      `
      --------
                   |      |
                   |      O
                   |     \|
                   |      |
                   |      
                   -
    `,
      // state: head & torso
      `
      --------
                   |      |
                   |      O
                   |      |
                   |      |
                   |      
                   -
    `,
      // state: head
      `
      --------
                   |      |
                   |      O
                   |     
                   |      
                   |      
                   -
    `,
      // just the rope
      `
      --------
                   |      |
                   |      
                   |     
                   |      
                   |      
                   -
    `,
      // initial state
      `
      --------
                   |
                   |
                   |
                   |
                   |
                   -
    `,
    ];

    return hangman[lives];
  }

  return (
    <div>
      <div>You have {props.livesLeft} lives left.</div>
    </div>
  );
}

export default LivesCounter;

// import * as React from "react";
// import { Text, View, StyleSheet } from "react-native";
// import Constants from "expo-constants";

// let word; // word placeholder
// let lives; // current lives placeholder
// let char; // character keyed in placeholder

// function livesLeft(word, lives, char) {
//   let wordArray = word.split("");

//   if (wordArray.includes(char)) {
//     lives += 0;
//   } else {
//     lives -= 1;
//   }
//   return lives;
// }

// let lives_left = livesLeft(word, lives, char);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: "#ecf0f1",
//     padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// });
