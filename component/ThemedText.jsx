import { StyleSheet,Text, useColorScheme } from 'react-native'
import { Colors } from '../constant/colors'
import { Fonts } from '../constant/fonts'


const ThemedText = ({ style, text = false,signin =false,login=false, success=false, warning=false,
  Header1=false,Header2=false,Header3=false,Header4=false,placehold=false,labels=false,
  bold=false,semiBold=false,regular=false, light=false,
   ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

 // font family, weight and size setup
  
  let fontSize = Fonts.bodytext
  if (Header1) fontSize = Fonts.Header1
  else if (Header2) fontSize = Fonts.Header2
  else if (Header3) fontSize = Fonts.Header3
  else if (Header4) fontSize = Fonts.Header4
  //else if (bodyText) fontSize = Fonts.bodyText
  else if (placehold) fontSize = Fonts.placehold
  else if (labels) fontSize= Fonts.labels

  // Fonts Weights
  
  let fontWeight = Fonts.regular
  if (bold ) fontWeight = Fonts.bold
  else if (semiBold) fontWeight = Fonts.semiBold
  //else if (regular) fontWeight = Fonts.regular
  else if (light) fontWeight = Fonts.light


  // Text color settings
 

  let textColor = theme.title;
  if (signin) textColor = theme.signin;
  else if (login) textColor = theme.login;
  
  else if (text) textColor = theme.text;
  else if (success) textColor = Colors.confirmations

  else if (warning) textColor = Colors.warning

  return (
    <Text 
      style={[{ color: textColor, fontSize:fontSize, fontFamily: "OpenSans", fontWeight:fontWeight }, style]}
      {...props}
    />
  )
}

export default ThemedText

const styles = StyleSheet.create({
  heading1:{
    fontSize: 35, fontWeight: "bold"
  },

})