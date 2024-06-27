import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import productsGetir from "../../../assets/productsGetir";
import { Product } from "../../models";
import CartItem from "../../components/CartItem";
import ProductItem from "../../components/ProductItem";
import { connect } from "react-redux";

const { width, height } = Dimensions.get("window");
function index({
  cartItems,
}: {
  cartItems: { product: Product; quantity: number }[];
}) {
 //fiyatı sııfırla
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const getProductsPrice= () => {
    let total = 0
    cartItems.forEach(item => {
      total += item.product.fiyat
      setTotalPrice(total)
    })
    cartItems.length ? null : setTotalPrice(0)
  }
  useEffect(() => {
    getProductsPrice()
  },[cartItems])

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <FlatList
          style={{}}
          data={cartItems}
          renderItem={({ item }) => <CartItem product={item.product} quantity={item.quantity}/>}
        />
        <Text style={{ padding: 15, fontWeight: "bold", color: "#5d3ebd" }}>
          Önerilen Ürünler
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          bounces={true}
          style={{ backgroundColor: "white" }}
        >
          {productsGetir.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </ScrollView>
      </ScrollView>
      <View
        style={{
          height: height * 0.12,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: "4%",
          position: "absolute",
          bottom: 0,
          width: "100%",
          backgroundColor: "#f8f8f8",
        }}
      >
        <TouchableOpacity
          style={{
            height: height * 0.06,
            flex: 3,
            backgroundColor: "#5d3ebd",
            justifyContent: "center",
            alignItems: "center",
            marginTop: -10,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            DEVAM
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            marginTop: -10,
            height: height * 0.06,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
          }}
        >
          <Text style={{ color: "#5d3ebd", fontWeight: "bold", fontSize: 16 }}>
            <Text>₺</Text>
            {totalPrice.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
}
const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

export default connect(mapStateToProps, null)(index);
