import * as React from 'react';
import { StyleSheet } from "react-native";
import { TextInput } from 'react-native-paper';

const TextInput = () => {
  const [text, setText] = React.useState("");

  return (
    <TextInput
      style={styles.button}
      label="text"
      value={text}
      onChangeText={text => setText(text)}
    />
  );
};

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default TextInput;