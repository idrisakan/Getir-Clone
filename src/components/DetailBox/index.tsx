import React from "react";
import { Text, View } from "react-native";

type DetailBoxProps = {
  price: number;
  name: string;
  quantity: string;
};

function index({ price, name, quantity }: DetailBoxProps) {
  return (
    <View
      style={{ width: "100%", backgroundColor: "white", alignItems: "center" }}
    >
      <Text
        style={{
          color: "#5d3ebd",
          fontWeight: "bold",
          fontSize: 20,
          marginTop: 12,
        }}
      >
        <Text>₺</Text>
        {price}
      </Text>
      <Text style={{ fontWeight: "600", fontSize: 16, marginTop: 12 }}>
        {name}
      </Text>
      <Text
        style={{
          color: "#848897",
          fontWeight: "600",
          marginTop: 8,
          paddingBottom: 17,
        }}
      >
        {quantity}
      </Text>
    </View>
  );
}

export default index;
