import AntDesign from '@expo/vector-icons/AntDesign';
import { useColorScheme } from 'react-native';
import { Colors } from '../../constant/colors';


const Larrow = () => {
     const scheme = useColorScheme();
        const theme = Colors[scheme] ?? Colors.light;
  return (
   <AntDesign name="arrow-left" size={24} color={theme.title} />
  )
}

export default Larrow
