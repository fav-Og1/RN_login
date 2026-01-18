import { Pressable, StyleSheet } from 'react-native'
import { Colors } from '../constant/colors'
// import { s,vs, } from 'react-native-size-matters'

function ThemedButton({ style, ...props }) {

  return (
    <Pressable 
      style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]} 
      {...props}
    />
  )
}
const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
     marginHorizontal: 5,
            width: "87%",
            marginTop:8,
            //TextWrap:"wrap",  
  },
  pressed: {
    opacity: 0.5
  },
})

export default ThemedButton