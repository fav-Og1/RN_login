import {  Stack} from 'expo-router'
import { useColorScheme } from 'react-native'
import { Colors } from '../constant/colors';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';



const RootLayout = () => {

   

    const colorScheme = useColorScheme ();
    const theme = Colors[colorScheme] ?? Colors.light

    

return(

        <>
        <StatusBar value='auto' />
        <Stack
    screenOptions={{
        headerShown:false,
        headerStyle: { backgroundColor: theme.signin },
        headerTintColor: theme.signin
    }}
        >

        <Stack.Screen name="index" options={{ headerShown: false, }} /> 
     <Stack.Screen name="Home" options={{ headerShown: false}} />
 
       
        

</Stack>
  </>

)

}


export default  RootLayout
