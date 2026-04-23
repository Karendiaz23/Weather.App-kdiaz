import { View } from "react-native";

export default function IconoClima({ condicion }: { condicion: string }) {
  return (
    <View
      testID={`icon-weather-${condicion}`}
      style={{
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: "black",
        marginVertical: 20,
      }}
    />
  );
}