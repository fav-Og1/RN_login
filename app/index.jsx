import { Keyboard, StyleSheet, TouchableWithoutFeedback, useColorScheme,Text } from 'react-native'
import { Colors } from '../constant/colors';
import ThemedView from '../component/ThemedView';
import { useRouter } from 'expo-router';
import ThemedText from '../component/ThemedText'
import Spacer from '../component/Spacer'
import ThemedButton from '../component/ThemedButton';
import { useState } from 'react';
import InfoForm from '../component/Form';
import Google from '../assets/icons/Google';
import Head from '../component/Head';
 import useUserStore from '../stores/userStore';



const index = () => {

    const colorScheme = useColorScheme()
          const theme = Colors[colorScheme] ?? Colors.light

      const { userStore, setUserField,resetUser } = useUserStore()

   const  [error, setError] = useState(null)
    const router = useRouter()



    
     const handleLogin = async () => {
   try {
    
        console.log("working")
        router.push('/Home')
   } catch (e) {
    setError(e.response?.data?.message || "Login failed");
  }
 };
         
    return(
      <>
<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
<ThemedView safe={true} style={styles.cont}>

<Head text={"Log in"}/>


<ThemedView style={styles.topview} >

<InfoForm type="email" placeholder="Email" 
onChangeText={(text) =>setUserField("email", text)} value={userStore.email} text="Email" 
/>

<InfoForm type="password" placeholder="password" secureTextEntry onChangeText={(text)=>setUserField("password", text)} value={userStore.password} text="Password" 
/>


</ThemedView>


<ThemedView style={styles.regbtn}>

<ThemedButton style={{marginBottom:10}} onPress={handleLogin} >
    <ThemedText signin>
            Login
    </ThemedText>
    </ThemedButton>             

<ThemedView style={styles.login}>
        <ThemedText title>
        Forgotten Password?  
    </ThemedText>
<ThemedText login> Reset</ThemedText>
</ThemedView>
    
    <Spacer  height={5}/>
{error && <Text style={styles.error}>{error}</Text>} 

<ThemedView style={{alignItems:"center"}}>
    
    <ThemedText text>Or continue with</ThemedText>

        </ThemedView>
</ThemedView>


<ThemedView style={styles.others}>
    <ThemedView style={styles.loginOption}> 
         <Google />
                <ThemedText title style={styles.text}> Login with Google</ThemedText>
        
       
    </ThemedView>
        
        <ThemedView style={{flexDirection: "row", justifyContent: "space-between", width: 250}}>
    <ThemedText>Don't have an account</ThemedText>
        <ThemedText login style={styles.text}>Register</ThemedText>
        </ThemedView>
        
</ThemedView>        

         
    
        </ThemedView>
          </TouchableWithoutFeedback> 
       </> 
    )
}



export default  index
const styles = StyleSheet.create({

    topview:{
     paddingLeft:10,
        marginTop:10,
        width: "100%",
        marginBottom:10},
   
    regbtn: {
     width:"100%",
    alignItems:"center"
    }
,
    others:{
        alignItems:'center',
        justifyContent: "space-evenly",
        height:120
    },
    cont:{
        flex:1,
        width:"100%",
    },
    login:{
        flexDirection:"row",
        marginBottom:10, 
        
    },
    error:{
        color: Colors.warning,
        padding: 10,
        backgroundColor: "#f5c1c8",
        borderColor: Colors.warning,
        borderWidth: 1,
        borderRadius:6,
        marginHorizontal: 10 
    },
    loginOption:{flexDirection:"row", 
        alignItems:"center",
         borderRadius:4, 
         width:"80%", padding:5,
          justifyContent:"space-evenly",
          elevation:1}
})
