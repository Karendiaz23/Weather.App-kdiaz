import { View, StyleSheet } from "react-native";
import ItemMetrica from "./ItemMetrica";

export default function Metricas({ humedad, presion, viento }: any) {
  return (
    <View style={styles.container}>
      
      <ItemMetrica 
        valor={`${humedad}%`} 
        label="Humedad" 
        tipo="humedad"
      />

      <ItemMetrica 
        valor={`${presion} hPa`} 
        label="Presión" 
        tipo="presion"
      />

      <ItemMetrica 
        valor={`${viento} km/h`} 
        label="Viento" 
        tipo="viento"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", 
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});