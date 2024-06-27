import React from "react";
import { Product } from "../../models";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import * as actions from '../../redux/actions/cartActions'

type CartItemProps = {
  product: Product;
  quantity: number;
  removeFromCart: (product:Product) => void
};
const { width, height } = Dimensions.get("window");
function index({ product, quantity, removeFromCart }: CartItemProps) {
  return (
    <View style={{ width: "100%", backgroundColor: "white" }}>
      <View
        style={{
          height: height * 0.13,
          width: width * 0.92,
          marginHorizontal: width * 0.04,
          flex: 1,
          backgroundColor: "white",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottomWidth: 0.4,
          borderBottomColor: "lightgrey",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{
              height: height * 0.09,
              width: height * 0.09,
              borderRadius: 8,
              borderWidth: 0.4,
              borderColor: "lightgray",
            }}
            source={{ uri: product.image }}
          />
          <View style={{ marginLeft: 8 }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "600",
                maxWidth: width * 0.46,
              }}
            >
              {product.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginTop: 3,
                color: "#848897",
                fontWeight: "600",
              }}
            >
              {product.miktar}
            </Text>
            <Text
              style={{
                color: "#5d3ebd",
                fontWeight: "bold",
                marginTop: 6,
                fontSize: 15,
              }}
            >
              <Text>₺</Text>
              {product.fiyat}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: width * 0.22,
            height: height * 0.04,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "space-around",
            borderWidth: 0.5,
            borderColor: "lightgrey",
            shadowOpacity: 0.4,
            shadowColor: "gray",
          }}
        >
          <TouchableOpacity
          onPress={() => removeFromCart(product)}
          style={{ flex: 1, alignItems: "center" }}>
            <Text>-</Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#5d3ebd",
              height: height * 0.04,
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 12 }}>
              {quantity}
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text>+</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (product:Product)  =>
      dispatch(actions.removeFromCart(product))
  }
}

export default connect(null, mapDispatchToProps)(index)
