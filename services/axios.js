import axios from "axios";


const api = axios.create({
baseURL: "https://dummyjson.com",
timeout: 5000,
});


export const fetchProducts = async () => {
const response = await api.get("/products");
console.log(response)
return response.data.products;
};