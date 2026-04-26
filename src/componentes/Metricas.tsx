import { View, StyleSheet } from "react-native";
import ItemMetrica from "./ItemMetrica";

export default function Metricas({ humedad, presion, viento }: any) {
  return (
    <View style={styles.container}>
      
      <ItemMetrica tipo="humedad" valor={`${Math.round(humedad)}%`} />
      <ItemMetrica tipo="presion" valor={`${Math.round(presion)} hPa`} />
      <ItemMetrica tipo="viento" valor={`${Math.round(viento)} km/h`} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    paddingLeft: 30,
    marginTop: 0,
  },
});
