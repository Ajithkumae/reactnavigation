import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tarms = () => {


    return (
        <View >
            <View style={styles.continer}>
                <Text> Tarms & condition </Text>
            </View>

            <View style={styles.textborder}>
                <Text style={styles.textaling}>
                    Hi User {`\n`}
                    If you've encountered a bug with React Navigation, please post an issue and be sure to fill out the issue template. If you believe there is a feature missing, please create a feature request on Canny, or if you're feeling up for the task of proposing an API for the feature, submit a RFC! If you just need some help, try joining us in the react-navigation channel on Discord or post a question to StackOverflow.
</Text>
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

export default Tarms;
