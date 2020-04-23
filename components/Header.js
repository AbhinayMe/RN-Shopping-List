import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {

    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
};

Header.defaultProps = {
    title: 'Shopping List'
};

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: 'darkslategray',
    },
    text: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
    },
})

export default Header;