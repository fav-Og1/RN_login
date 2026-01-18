import {  TextInput, useColorScheme } from 'react-native'
//import { s,vs } from 'react-native-size-matters'
import { Colors } from '../constant/colors'


const InputField = ({style, ...props})  => {

  const colorScheme =useColorScheme() 
  const theme = Colors[colorScheme] ?? Colors.light

  return (
  


      <TextInput 
        style={[
          {
            backgroundColor: theme.uiBackground,
            color: theme.text,
            paddingVertical:10  ,
            paddingLeft: 16  ,
            borderRadius:  6  ,
            //fontSize:  16  ,
            color: theme.title,
            marginHorizontal:  5  ,
            width: "95%",
            
          },
          style
        ]}
        {...props}
      />
    
      )
}

export default InputField


{/*----  
  
  const styles = StyleSheet.create({
  cont:{
    height:48,
    borderRadius:8,
    width: "90%",
    backgroundColor: Colors.uiBackground,
    marginBottom: 8
  },
  textInput:{
    padding: 5,
    fontSize: 16,
    marginHorizontal: 5,
    color: Colors.primary
    }
}  
  
  
  ----*/
}
