import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, ToastAndroid } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import { uuid } from 'uuidv4';

const App = () => {

  const [items, setItems] = useState([
    { id: uuid(), text: 'Milk' },
    { id: uuid(), text: 'Eggs' },
    { id: uuid(), text: 'Bread' },
    { id: uuid(), text: 'Juice' },
    { id: uuid(), text: 'Jam' },
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      console.log("prevItems delete: " + prevItems.filter(item => item.id));
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = (text) => {
    if (!text) {
      console.log(uuid());
      Alert.alert('Error', 'Please enter an item', [{ text: 'Ok' }]);
      // Alert.alert(
      //   'Error',
      //   'please enter add item title',
      //   [{
      //     text: 'OKKK'
      //     // ,onPress: () => ToastAndroid.show('Ask me later pressed', ToastAndroid.LONG)
      //   }]);
    } else {
      setItems(prevItems => {
        console.log("prevItems count: " + prevItems.length);

        let uuidTemp = uuid();
        console.log("addItem uuid: " + uuidTemp);
        console.log("addItem text: " + text);

        let newItem = { id: uuidTemp, text };

        return [newItem, ...prevItems];
      });
    }

  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
})

export default App;