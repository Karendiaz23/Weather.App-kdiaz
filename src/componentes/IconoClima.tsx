import { View } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function IconoClima({ condicion }: { condicion: string }) {

  const getIcon = () => {
    const c = condicion.toLowerCase();

    // ☀️ soleado
    if (c.includes("sun") || c.includes("soleado") || c.includes("clear")) {
      return <Feather name="sun" size={100} color="black" />;
    }

    // ☁️ nublado
    if (c.includes("cloud") || c.includes("nublado")) {
      return <Feather name="cloud" size={100} color="black" />;
    }

    // 🌧 lluvia
    if (c.includes("rain") || c.includes("lluvia")) {
      return <Feather name="cloud-rain" size={100} color="black" />;
    }

    // 🌫 fallback
    return <Feather name="cloud" size={100} color="black" />;
  };

  return (
    <View
      testID={`icon-weather-${condicion}`}
      style={{ marginVertical: 20 }}
    >
      {getIcon()}
    </View>
  );
}