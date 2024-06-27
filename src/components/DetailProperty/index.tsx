import React, { useState } from "react";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

function index() {
  const [details, setDetails] = useState<string[]>([
    "Sütlü kıtır çikolata ve badem parçacıklarıyla kaplı vanilya lezzeti",
    "İçindekiler",
    "Besin Değerleri",
    "Kullanım",
    "Ek Bilgiler",
  ]);

  const TextComponent = ({
    detail,
    index,
  }: {
    detail: string;
    index: number;
  }) => {
    return (
      <View
        style={{
          paddingVertical: 12,
          borderBottomWidth: index === details.length - 1 ? 0 : 0.4,
          borderBlockColor: "lightgray",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: index === 0 ? 10.5 : 13,
            fontWeight: index === 0 ? "400" : "500",
            color: index === 0 ? "#4E4E4E" : "#687482",
          }}
        >
          {detail}
        </Text>
        {index != 0 && (
          <Feather name="chevron-down" size={24} color="#9f9f9f" />
        )}
      </View>
    );
  };
  return (
    <View
      style={{
        backgroundColor: "white",
        paddingHorizontal: 16,
        paddingVertical: 8,
      }}
    >
      {details.map((item, index) => (
        <TextComponent key={index} index={index} detail={item} />
      ))}
    </View>
  );
}

export default index;
