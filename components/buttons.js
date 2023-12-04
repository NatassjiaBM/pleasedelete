import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

const MyButton = ({title, onPress}) => {
    return ( 
        <Button mode="contained" onPress={onPress}>
            <Text style={styles.textContainer}>{title}</Text>
            onPress={console.log('pressed')}
        </Button>
    );
};

export default MyButton;

const styles = StyleSheet.create({
    textContainer: {
      backgroundColor: '#FFC0CB', 
      alignItems: 'center',
    },
  });
  