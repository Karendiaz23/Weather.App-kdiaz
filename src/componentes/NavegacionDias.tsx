import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function NavegacionDias({
  fechaPrev,
  fechaActual,
  fechaNext,
  onPrev,
  onNext
}: any) {
  return (
    <View style={styles.container}>
      
      <TouchableOpacity onPress={onPrev}>
        <Text style={styles.side}>{`< ${fechaPrev}`}</Text>
      </TouchableOpacity>

      <Text style={styles.center} testID="navigation-current-day">
        {fechaActual}
      </Text>

      <TouchableOpacity onPress={onNext} testID="button-next-day">
        <Text style={styles.side}>{`${fechaNext} >`}</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  center: {
    fontSize: 16,
    fontWeight: "bold",
  },
  side: {
    fontSize: 14,
    color: "#999",
  },
});