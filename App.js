import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const App = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
      <Image source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} style={styles.img} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'plum'
  },
  text: {
    color: 'turquoise',
    backgroundColor: 'green',
    fontSize: 32
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    margin: 20
  }
})

export default App;