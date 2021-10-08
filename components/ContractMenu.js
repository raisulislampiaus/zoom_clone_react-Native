import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const contractMenu = [
    {
        type:  "Star*Red",
        name:  "Star*Red",
    },
    {
        type: "contact",
        name: "Piaus",
        photo: require("../assets/piaus11.png")
    },
    {
        type: "contact",
        name: "Raisul",
        photo: require("../assets/piaus33.jpg")
    },
    {
        type: "contact",
        name: "The Rip programmers",
        photo: require("../assets/ppppppp.jpg")
    },
]

const ContractMenu = () => {
    return (
        <View style={styles.container}>
           {contractMenu.map((contact, index)=> 
             <View key={index} style={styles.row}>
                {contact.type == "Star*Red" ? (
                    <View style={styles.icon}>
                        <AntDesign name="star" size={25} color="#efefef" />
                    </View>) :
                    (
                      <Image source={contact.photo} style={styles.image}/>
                    )
                }
                 <Text style={styles.text}>
                  {contact.name}
                 </Text>
            </View>
           
           )}
            
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
       
    },

    row: {
      flexDirection: "row",
      marginTop: 22,
       alignItems: "center",
    },
    icon: {
      backgroundColor: "orange",
      height:60,
      width: 60,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20,
    },

    text: {
      paddingLeft: 16,
      color: "white",
      fontSize: 22
    },
    image: {
      height:60,
      width: 60,
      borderRadius: 20,
    }
   
});

export default ContractMenu
