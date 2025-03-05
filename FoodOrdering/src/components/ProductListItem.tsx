import { StyleSheet, Image } from "react-native";
import Colors from "@/src/constants/Colors";
import { Product } from "../types";
import EditScreenInfo from "@/src/components/EditScreenInfo";
import { Text, View } from "@/src/components/Themed";

const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonawn.com/food/default.png";

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: "50%",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },

  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
});
