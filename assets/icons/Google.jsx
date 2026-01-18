import AntDesign from '@expo/vector-icons/AntDesign';
import { useColorScheme } from 'react-native';
import { Colors } from '../../constant/colors';

const Google = () => {
    const scheme = useColorScheme();
    const theme = Colors[scheme] ?? Colors.light;
  return (
    <AntDesign name="google" size={24} color={theme.title} />
  )
}

export default Google

