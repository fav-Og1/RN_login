import { StyleSheet, Text, View } from 'react-native'
import ThemedView from './ThemedView'
import Spacer from './Spacer'
import InputField from './InputField' 
// import { s } from 'react-native-size-matters'
import ThemedText from './ThemedText'

const InfoForm = ({placeholder,keyboardType,onChangeText,value,text, secureTextEntry=false, type,...props}) => {
  return (
        <ThemedView styles={styles.cont}>
            
<ThemedText style={{marginBottom:10}} semiBold>{text}</ThemedText>
<InputField 
style={styles.form}
light labels
placeholder={placeholder}
keyboardType={keyboardType}
onChangeText={onChangeText}
value={value}
secureTextEntry={secureTextEntry}
type={type}
{...props}
                    />
                     <Spacer height={20} /> 
        </ThemedView>
  )
}

export default InfoForm

const styles = StyleSheet.create({
        cont:{
              flexDirection:"column",
              height:20,
              width:"90%"                           
        },
        form:{
            height:50
        }
})