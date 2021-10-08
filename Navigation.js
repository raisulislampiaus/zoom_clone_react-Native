import React from 'react'
import { View, Text,  StyleSheet, } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screen/Home'
import Meeting from './screen/Meeting'

const Navigation = () => {
    const Stack = createStackNavigator();
    return (
         <NavigationContainer>
            <Stack.Navigator initialRouteName={Home}>
              <Stack.Screen name="Home" component={Home} options={{ headerShown: false}} />
              <Stack.Screen 
                    name="Room" 
                    component={Meeting} 
                    options={{ 
                        title: 'Start a new Meeting', 
                        headerStyle: { backgroundColor: "black"}, 
                        headerTintColor: 'white'
                    }} 
                />
            </Stack.Navigator>
          </NavigationContainer>
    )
}

export default Navigation
