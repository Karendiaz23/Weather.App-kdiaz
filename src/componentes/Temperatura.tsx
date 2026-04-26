import { View, Text, StyleSheet } from "react-native";

export default function Temperatura({ actual, min, max }: any) {
  return (
    <View style={styles.container}>

      <Text style={styles.temp} testID="temp-current">
        {`${actual}°`}
      </Text>

      <View style={styles.row}>
        <Text style={styles.min} testID="temp-min">{min}°</Text>
        <Text style={styles.sep}> | </Text>
        <Text style={styles.max} testID="temp-max">{max}°</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>MÍNIMO</Text>
        <Text style={styles.space}></Text>
        <Text style={styles.label}>MÁXIMO</Text>
      </View>

      <Text style={styles.hoy}>HOY</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 10,
  },
  temp: {
    fontSize: 80,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  min: {
    fontSize: 22,
  },
  max: {
    fontSize: 22,
  },
  sep: {
    marginHorizontal: 6,
    fontSize: 18,
  },
  label: {
    fontSize: 13,
    color: "#888",
  },
  space: {
    width: 30,
  },
  hoy: {
    marginTop: 6,
    fontSize: 13,
    letterSpacing: 2,
  },
});