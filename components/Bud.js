import React from "react";
import { Image, View } from "react-native";
import bud from "./img/bud.png";
const Bud = ({ budBottom, budLeft }) => {
  const budWidth = 70;
  const budHeight = 70;
  return (
    <View
      style={{
        position: "absolute",
        left: budLeft - budWidth / 2,
        bottom: budBottom - budHeight / 2,
      }}
    >
      <Image source={bud} style={{ width: budWidth, height: budHeight }} />
    </View>
  );
};

export default Bud;
