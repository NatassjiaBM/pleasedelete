import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import MyComponent from './components/buttons';
import { TextInput } from 'react-native-paper';
import DisplayAnImageWithStyle from './components/image';
import MyButton from './components/buttons';




export default function App() {
  return (
    <View style={styles.container}>
      <DisplayAnImageWithStyle></DisplayAnImageWithStyle>
      <TextInput>Email</TextInput>
      <TextInput>Password</TextInput>
      <MyButton title="Login"
       onPress={() => console.log("Button login pressed")}></MyButton>
      <StatusBar style="auto" />
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
