import { useEffect, useState } from "react";
import { FlatList, ActivityIndicator, Text,StyleSheet } from "react-native";
import { fetchProducts } from "../services/axios"
import ProductCard from "../component/product/Product";
import ThemedView from "../component/ThemedView";
import Head from "../component/Head";


export default function ProductsScreen() {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);


useEffect(() => {
loadProducts();
}, [])

const loadProducts = async () => {
try {
    console.log("working")
const data = await fetchProducts();
setProducts(data);
console.log("working")
} catch (err) {
setError("Failed to load products");
} finally {
setLoading(false);
}
};
if (loading) return <ThemedView safe={true} style={styles.Home}  ><ActivityIndicator size="large" /></ThemedView>;
if (error) return <ThemedView safe={true} style={styles.Home}>
    <Text>{error}</Text>
</ThemedView>;



return (
    <ThemedView safe={true} style={{flex:1}}>
        <Head text={"Product Page"}/>
<FlatList
data={products}
keyExtractor={(item) => item.id.toString()}
renderItem={({ item }) => <ProductCard product={item} />}
contentContainerStyle={{ padding: 16 }}
/>
</ThemedView>
);
}

const styles = StyleSheet.create({
    Home:{flex:1, justifyContent:"center",alignItems:"center"}
    
})