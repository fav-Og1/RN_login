import { Pressable, StyleSheet, useColorScheme } from 'react-native'
import ThemedView from './ThemedView'
import ThemedText from './ThemedText'
import Larrow from '../assets/icons/Larrow'
// import { s } from 'react-native-size-matters'
import { Colors } from '../constant/colors'
import Spacer from './Spacer'
import { useRouter } from 'expo-router'

const Head = ({text}) => {

  const { router } = useRouter()
  const colorScheme =useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
  return (
    <ThemedView style={styles.topview}>
           <Pressable onPress={() =>{router.back()}}>
              <Larrow color={theme.title} />
            </Pressable> 
            <Spacer width='10%' />
                  <ThemedText Header4 bold title >
                        {text} 
                  </ThemedText>
    </ThemedView>
  )
}

export default Head

const styles = StyleSheet.create({
     topview: {
               paddingLeft:16,
                  marginTop: 8,
                  width: "100%",
              marginBottom: 5,
             // height:s(65),
              //justifyContent:"space-between",
              alignItems:"center",
                      flexDirection:"row"
           
        }
})