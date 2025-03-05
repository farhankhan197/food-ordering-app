import { View, Text, StyleSheet, Image } from "react-native";
import { defaultPizzaImage } from "@/assets/data/defaultPizzaImage";
import { useLocalSearchParams, Stack } from "expo-router";
import products from "@/assets/data/products";

const sizes = ["S", "M", "L", "XL"];
const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((product) => product.id.toString() === id);
  if (!product) {
    return <Text>Product not found</Text>;
  }
  return (
    <View>
      <Stack.Screen options={{ title: product.name }} />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
      ></Image>
      <Text>Select size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Text key={size}>{size}</Text>
        ))}
        <Text style={styles.price}> {product.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  sizes:{

  },
  price: {
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default ProductDetailsScreen;
