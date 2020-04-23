import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({ title, addItem }) => {

    const [text, setText] = useState('');

    const onchange = textValue => setText(textValue);

    return (
        <View>
            <TextInput
                placeholder='Add items...'
                style={styles.inputText}
                onChangeText={onchange}
            />
            <TouchableOpacity
                style={styles.btn}
                onPress={() => addItem(text)} >
                <Text style={styles.btnText}><Icon name="plus" size={20} style={styles.icon} /> Add item</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    inputText: {
        color: 'green',
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        // flexDirection: "row",
        backgroundColor: 'lightslategray',
        padding: 9,
        margin: 5,
        // alignItems: 'center',
        // alignContent: 'center',
    },
    btnText: {
        color: 'darkslategray',
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    // icon: {
    //     padding: 5,
    // }

})

export default AddItem;