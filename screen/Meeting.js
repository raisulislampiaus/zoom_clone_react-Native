import React, { useState, useEffect } from 'react'
import { View, Text,  StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Platform} from 'react-native'
import StartMeeting from '../components/StartMeeting'
import { io } from 'socket.io-client'
import { Camera } from 'expo-camera';
import FontAwesome from 'react-native-vector-icons/FontAwesome'



let socket;

const MenuIcons = [
    {
        id: 1,
        name: "microphone",
        title: "Metu",
        customColor: "orange",
    },
    {
        id: 2,
        name: "video-camera",
        title: "Stop Video",
        customColor: "#00FF00",
    },
    {
        id: 3,
        name: "group",
        title: "Participants"
    },
    {
        id: 4,
        name: "upload",
        title: "Share Screen",
        customColor: "#B7CEEC",
    },
]

const Meeting = () => {
    const [name, setName] = useState();
    const [roomId, setRoomId] = useState()
    const [activeUsers, setActiveUsers] = useState([]);
    const [startCamera, setStartCamera] = useState(false)

    const __startCamera = async () => {
        const { status } = await Camera.requestPermissionsAsync();
        if (status === 'granted'){
            setStartCamera(true);
        } else{
            Alert.alert("Access denied");
        }
    }

    const joinRoom = () => {
      __startCamera();
      socket.emit('join-room', { roomId: roomId, userName: name})
    }

    useEffect(()=> {
        const API_URL = "http://192.168.1.6:3001"
        socket = io(`${API_URL}`);
        socket.on("connection", ()=>console.log("connected") )
        socket.on("all-users", users => {
            console.log(users, "after cleanup")
             setActiveUsers(users)
        })
    }, [])

    return (
        <View style={styles.container}>
            {startCamera ? (
                <SafeAreaView style={{ flex: Platform.OS === 'android' ? 1 : 1 }}>
                    <View style={styles.activeCameraContainer}>
                        <View style={styles.cameraContainer}>
                            <Camera 
                            type={"front"} 
                            style={{ 
                                    width: activeUsers.length <= 1 ?  "100%" : 200, 
                                    height: activeUsers.length <= 1 ? 600 : 200
                                }}
                            >
                            
                            </Camera>
                            {activeUsers.filter(user => (user.userName != name )).map((user, index) => 
                                <View key={index} style={styles.asifContaine}>
                                    <Text style={{ color: "white" }}>{user.userName}</Text>
                                </View>
                            )}
                        </View>
                    </View>
                    <View style={styles.menu}>
                      {MenuIcons.map((icon, index)=> 
                        <TouchableOpacity key={index} style={styles.opcity}>
                            <FontAwesome name={icon.name} size={25} color="#efefef" />
                            <Text style={styles.text}> {icon.title} </Text>
                        </TouchableOpacity>
                       )}
                    </View>
                </SafeAreaView>
            ) : (
               <StartMeeting 
                    name={name}
                    setName={setName}
                    roomId={roomId}
                    setRoomId={setRoomId}
                    joinRoom={joinRoom}
                    
                />
            )
            }
            
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:  "black",
        flex: 1
    },

    opcity: {
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        marginTop: 20,
    },

    text: {
        color: "white",
        marginTop: 10,
    },

    menu: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    cameraContainer: {
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
    },
    activeCameraContainer: {
       flex: 1,
       width: "100%",
       justifyContent: "center",
    },
    asifContaine: {
        borderColor: "white",
        borderWidth: 1,
        height: 200,
        width: 200,
        justifyContent: "center",
        alignItems: "center",
    }
   
});

export default Meeting
