import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function NavegacionDias({ fecha, onPrev, onNext }: any) {
  return (
    <View style={styles.container}>
      
      <View style={styles.row}>
        <TouchableOpacity testID="button-prev-day" onPress={onPrev}>
          <Text style={styles.arrow}>{"<"}</Text>
        </TouchableOpacity>

        <Text testID="navigation-current-day" style={styles.date}>
          {fecha}
        </Text>

        <TouchableOpacity testID="button-next-day" onPress={onNext}>
          <Text style={styles.arrow}>{">"}</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", marginBottom: 20 },
  row: { flexDirection: "row", alignItems: "center" },
  arrow: { fontSize: 20, marginHorizontal: 10 },
  date: { fontSize: 16, letterSpacing: 2 },
});