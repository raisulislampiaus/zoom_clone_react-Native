import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'

const Seachbar = () => {
    return (
        <View style={styles.container}>
            <Fontisto name="search" size={30} color="#efefef" />
            <Text style={styles.heading}>Search</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        flexDirection: "row",
        paddingHorizontal: 10,
        alignItems: "center",
        height: 40,
        borderRadius: 10,
    },
    heading: {
        color: "white",
        paddingLeft: 10,
        fontSize: 20
    }
});

export default Seachbar
