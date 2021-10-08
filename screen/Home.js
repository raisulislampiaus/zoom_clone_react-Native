import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Platform } from 'react-native'
import Header from '../components/Header'
import SeachBar from '../components/SeachBar'
import MenuButton from '../components/MenuButton'
import ContractMenu from '../components/ContractMenu'

const Home = ( { navigation } ) => {
    return (
        <View style={styles.container}>
           <SafeAreaView style={styles.droidSafeArea}>
                <Header />
                <SeachBar />
                <MenuButton navigation={navigation} />
                <ContractMenu />
           </SafeAreaView> 
        </View>
    )
};

const styles = StyleSheet.create({
    droidSafeArea: {
        height: '100%',
        paddingTop: Platform.OS === 'android' ? 20 : 0
    },
    container: {
        backgroundColor: "black",
        padding: 14,
    }
});

export default Home
