import { Text } from "react-native";

export default function Encabezado({ ciudad }: { ciudad: string }) {
  return (
    <Text
      testID="header-city"
      style={{
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10
      }}
    >
      {ciudad.toUpperCase()}
    </Text>
  );
}