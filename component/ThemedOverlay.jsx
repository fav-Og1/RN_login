import { StyleSheet, useColorScheme, View } from 'react-native'
import { Colors } from '../constant/colors'

const ThemedOverlay = () => {
        const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
     <View style={[{backgroundColor: theme.modalOverlay}, styles.overlay]} /> 
  )
}

export default ThemedOverlay

const styles = StyleSheet.create({
      overlay:{
  
    position:"absolute",
   // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
    top: 0,
  left: 0,
  right: 0,
  bottom: 0,

},
})