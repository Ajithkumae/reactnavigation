import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Savedcard = () => {


    return (
        <View >
            <View style={styles.continer}>
                <Text>Saved card </Text>
            </View>

           
        </View>
    );
}

const styles = StyleSheet.create({

    continer: {
        marginTop: 20,
        flex: 1,
        marginLeft: 20
    },
    textborder: {
        marginTop: 30,
        borderWidth: 1,
        height: 250,
        marginHorizontal: 12
    },
    textaling: {
        margin: 10
    }
})

export default Savedcard;
