import React, { useState } from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import categoriesGetir from "../../../assets/categoriesGetir";
import { Category } from "../../models";

const { height, width } = Dimensions.get("window");

const CategoryBox = ({ item,active }: { item: Category,active:Category }) => {
  return (
    <View style={[{paddingHorizontal:9,flexDirection:'row', alignItems:'center'},item.name==active.name && {borderBottomColor:'#ffd00c', borderBottomWidth:2.5}]}>
      <Text style={{fontSize:14,color:'white',fontWeight:'600'}}>{item.name}</Text>
    </View>
  );
};

function index({category}:{category:Category}) {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);
  return (
    <ScrollView
      style={{
        width: "100%",
        backgroundColor: "#7849f7",
        height: height * 0.065,
      }}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      bounces={true}
    >
      {categories.map((item) => (
        <CategoryBox item={item} active={category} key={item.id} />
      ))}
    </ScrollView>
  );
}

export default index;
