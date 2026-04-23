import { Text } from "react-native";

export default function Encabezado({ ciudad }: { ciudad: string }) {
  return (
    <Text testID="header-city" style={{ fontSize: 24, fontWeight: "bold" }}>
      {ciudad.toUpperCase()}
    </Text>
  );
}