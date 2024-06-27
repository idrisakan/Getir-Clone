import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

const TypeBox = ({setCat, item, active }: {setCat:any, item: string; active: string }) => {
  return (
    <TouchableOpacity
    onPress={() => setCat(item)}
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 12,
          marginRight: 12,
          borderRadius: 6,
          height: height * 0.044,
        },
        item == active
          ? { backgroundColor: "#5c3ebc" }
          : { borderColor: "#f0eff7", borderWidth: 1.3 },
      ]}
    >
      <Text
        style={[
          { fontSize: 12, fontWeight: "600", color: "#7849f7" },
          item == active && { color: "white" },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};

function index() {
  const [category, setCategory] = useState<String>("Birlikte iyi gider");
  return (
    <ScrollView
      style={{
        width: "100%",
        height: height * 0.072,
        flexDirection: "row",
        backgroundColor: "white",
        paddingHorizontal: 12,
        paddingVertical: height * 0.014,
        borderBottomColor:'lightgrey',
        borderBottomWidth:1,
      }}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      bounces={true}
    >
      {["Birlikte iyi gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"].map(
        (item) => (
          <TypeBox setCat={setCategory} item={item} active={category} />
        )
      )}
    </ScrollView>
  );
}

export default index;
