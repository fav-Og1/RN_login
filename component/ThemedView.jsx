import { useColorScheme, View } from 'react-native'
import { Colors } from '../constant/colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
//import { s } from 'react-native-size-matters'

const ThemedView = ({ style, safe = false,...props  }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  if (!safe ) return (
    <View 
      style={[{ backgroundColor: theme.background }, style]}
      {...props}
    />
  )

  const insets = useSafeAreaInsets()

  return(
     <View 
      style={[{ backgroundColor: theme.background,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          width:"100vw"
      }, 
      style ]}
      {...props}
    />
  )
}

export default ThemedView