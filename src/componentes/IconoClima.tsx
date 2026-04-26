import { View } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function IconoClima({ condicion }: { condicion: string }) {

  const getIcon = () => {
    const c = condicion.toLowerCase();

    if (c.includes("sun") || c.includes("soleado") || c.includes("clear")) {
      return <Feather name="sun" size={110} color="black" />;
    }

    if (c.includes("cloud") || c.includes("nublado")) {
      return <Feather name="cloud" size={110} color="black" />;
    }

    if (c.includes("rain") || c.includes("lluvia")) {
      return <Feather name="cloud-rain" size={110} color="black" />;
    }

    return <Feather name="cloud" size={110} color="black" />;
  };

  return (
    <View style={{ marginVertical: 5 }}>
      {getIcon()}
    </View>
  );
}
