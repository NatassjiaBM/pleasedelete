import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 90,
    height: 100,
  },
});

const DisplayAnImageWithStyle = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={{
            uri: 'https://m.media-amazon.com/images/I/81FefTBtlvL._AC_UF894,1000_QL80_.jpg',
        }}
      />
    </View>
  );
};

export default DisplayAnImageWithStyle;