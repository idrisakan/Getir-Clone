import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import HomeScreen from "../screens/HomeScreen";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import { Ionicons } from "@expo/vector-icons";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import CartScreen from "../screens/CartScreen";
import { connect } from "react-redux";
import * as actions from "../redux/actions/cartActions";
import { Product } from "../models";

const Stack = createStackNavigator();

const { width, height } = Dimensions.get("window");

function Mystack({
  navigation,
  route,
  cartItems,clearCart
}: {
  cartItems: { product: Product; quantity: number }[],clearCart:() => void;
}) {
  const tabHiddenRoutes = ["ProductDetails", "CartScreen"];
  const [totalPrice, setTotalPrice] = useState<number>(0);

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    console.log("Route Name is ", routeName);
    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      console.log("Aç ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "true" } });
    }
  }, [navigation, route]);

  const getProductPrice = () => {
    var total = 0;

    cartItems.forEach((carItem) => {
      const price = (total += carItem.product.fiyat);
      setTotalPrice(price);
    });
  };
  useEffect(() => {
    getProductPrice();
  }, [cartItems, navigation, route]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#5c3ebc" },

          headerTitle: () => (
            <Image
              source={require("../../assets/getirlogo.png")}
              style={{ width: 70, height: 30 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#5c3ebc" },
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 16, color: "white" }}>
              Ürünler
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("CartScreen")}
              style={{
                width: width * 0.22,
                height: 33,
                backgroundColor: "white",
                marginRight: width * 0.03,
                borderRadius: 9,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 23, height: 23, marginLeft: 6 }}
                source={require("../../assets/cart.png")}
              />
              <View
                style={{ height: 33, width: 4, backgroundColor: "white" }}
              />
              <View
                style={{
                  flex: 1,
                  height: 33,
                  backgroundColor: "#f3effe",
                  borderTopRightRadius: 9,
                  borderBottomRightRadius: 9,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ color: "#5d3ebd", fontWeight: "bold", fontSize: 12 }}
                >
                  <Text>₺</Text>
                  {totalPrice.toFixed(2)}
                </Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        options={{
          headerBackTitleVisible: false,
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#5c3ebc" },
          headerLeft: () => (
            <TouchableOpacity
              style={{ paddingLeft: 12 }}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 15 }}>
              Ürün Detayı
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 10 }}>
              <Entypo name="heart" size={24} color="#32177a" />
            </TouchableOpacity>
          ),
        }}
        name="ProductDetails"
        component={ProductDetailsScreen}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#5c3ebc" },
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              SEPETİM
            </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{ paddingLeft: 10 }}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="close" size={26} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity 
            onPress={() =>clearCart()}
            style={{ paddingRight: 10 }}>
              <Ionicons name="trash" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
  };
};

function HomeNavigator({
  navigation,
  route,
  cartItems,
  clearCart,
}: {
  clearCart: () => void;
}) {
  return (
    <Mystack navigation={navigation} route={route} cartItems={cartItems} clearCart={clearCart} />
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeNavigator);
