import { View, Text, Image, StyleSheet } from "react-native";
import ThemedView from "../ThemedView";
import ThemedText from "../ThemedText";
import ThemedCard from '../ThemedCard'

export default function ProductCard({ product }) {
return (
<ThemedCard style={styles.card}>
<Image source={{ uri: product.thumbnail }} style={styles.image} />
<ThemedText style={styles.title}>{product.title}</ThemedText>
<ThemedText numberOfLines={2} text>
{product.description}
</ThemedText>
<ThemedText style={styles.price}>₦{product.price}</ThemedText>
</ThemedCard>
);
}

const styles = StyleSheet.create({
card: {

// padding: 12,
// borderRadius: 10,
marginBottom: 12,
},
image: {
height: 120,
borderRadius: 8,
},

})