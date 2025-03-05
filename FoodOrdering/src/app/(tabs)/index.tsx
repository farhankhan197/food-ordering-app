import { View, FlatList } from "react-native";
import ProductListItem from "@/src/components/ProductListItem";
import products from "@/assets/data/products";

export default function MenuScreen() {
  return (
    <View>
      {/* <ProductListItem product={products[1]}/>
    <ProductListItem product={products[5]}/> */}
      <FlatList
        data={products}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
        renderItem={({ item }) => <ProductListItem product={item} />}
      />
    </View>
  );
}
