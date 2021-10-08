import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'



const items = [
    {
        id: 1,
        name: "video-camera",
        title: "New & Meeting",
        customColor: "orange",
    },
    {
        id: 2,
        name: "plus-square",
        title: "Join",
        customColor: "#00FF00",
    },
    {
        id: 3,
        name: "calendar",
        title: "Schedule"
    },
    {
        id: 4,
        name: "upload",
        title: "Share Screen",
        customColor: "#B7CEEC",
    },
]




const MenuButton = ({ navigation }) => {
    const openMeeting = () => {
        navigation.navigate("Room")
    }
    return (
        <View style={styles.container}>
            {items.map((item, index) => 
                <View key={index} style={styles.buttonContainer}>
                    <TouchableOpacity onPress={()=> openMeeting()} style={{...styles.button, backgroundColor: item.customColor ? item.customColor : "blue"}}>
                        <FontAwesome name={item.name} size={25} color="#efefef" />
                    </TouchableOpacity>
                    <Text style={styles.menu}>{item.title}</Text>
                </View>
            )}
             
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 23,
        paddingBottom: 10,
        borderBottomColor: "orange",
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    buttonContainer: {
         alignItems: "center",
         flex: 1
    },
    button: {
     width: 50,
     height: 50,
     borderRadius: 16,
     justifyContent: "center",
     alignItems: "center",
    },
    menu: {
       color: "white",
       paddingTop: 12,
       fontSize: 14,
       fontWeight: "600"

    }
});

export default MenuButton
