import React from "react";
import { View, Text } from "react-native";

export default function Temperatura({ actual, min, max, dia }) {
  return (
    <View>

      <Text>{dia}</Text>

      <Text testID="temp-current">
        {`${actual}°`}
      </Text>

      <Text testID="temp-min">
        {`${min}°`}
      </Text>

      <Text testID="temp-max">
        {`${max}°`}
      </Text>

    </View>
  );
}