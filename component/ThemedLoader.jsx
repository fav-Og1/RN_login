import { ActivityIndicator, useColorScheme } from "react-native"; 
import { Colors } from "../constant/colors";
import ThemedView from "./ThemedView";

const ThemedLoader = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return(
        <ThemedView style={{flex: 1, alignItems: "center", justtifyContent: "center"}}>
                        <ActivityIndicator size="large" color={theme.text} />

        </ThemedView>
    )
}
export default ThemedLoader