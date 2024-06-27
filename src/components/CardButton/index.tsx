import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/cartActions";


const { width, height } = Dimensions.get("window");

type cartButtonType = {
  addItemToCart: (a:Product)=> void
  item:Product
}

function index({item,addItemToCart}:cartButtonType) {
  return ( 
    <TouchableOpacity
    onPress={() => addItemToCart(item) }
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: height * 0.11,
        backgroundColor: "white",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#5d39c1",
          marginTop: -10,
          height: height * 0.06,
          width: "90%",
          marginHorizontal: "5%",
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
          Sepete Ekle
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product: Product) =>
      dispatch(actions.addToCart({ quantity: 1, product })),
  };
};

export default connect(null, mapDispatchToProps)(index);
