import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'

const StartMeeting = ({ name, setName, roomId, setRoomId, joinRoom, }) => {
    return (
        <View style={styles.MeetingContainer}>
               <View style={styles.info}>
                  <TextInput 
                    style={styles.textinput}
                    value={name}
                    placeholder= "Enter Name"
                    placeholderTextColor="white"
                    onChangeText={text => setName(text)}
                  />
               </View>
               <View style={styles.info}>
                    <TextInput 
                    style={styles.textinput}
                    value={roomId}
                    placeholder= "Enter room Id"
                    placeholderTextColor="white"
                    onChangeText={text => setRoomId(text)}
                  />
               </View>
               <View style={{  alignItems: "center" }}>
                 <TouchableOpacity onPress={()=> joinRoom()} style={styles.MeetingButton}>
                   <Text style={{ color: "white", fontWeight: "bold"}}>Start Meeting</Text>
                 </TouchableOpacity>
               </View>
        </View>
    )
};

const styles = StyleSheet.create({
    MeetingContainer: {
         
    },

    info: {
        width: "100%",
        backgroundColor: "orange",
        height: 50,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "white",
        padding: 12,
        
        justifyContent: "center",
    },
    textinput: {
        color: "white",
        fontSize: 20
    },
    MeetingButton: {
        width: 355,
        marginTop: 25,
        justifyContent: "center",
         alignItems: "center" ,
         backgroundColor: "blue",
         height: 52,
         borderRadius: 28,

    }
   
});

export default StartMeeting
