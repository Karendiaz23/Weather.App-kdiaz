import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Temperatura({ actual, min, max, dia }) {
  return (
    <View style={styles.container}>

      <Text style={styles.dia}>{dia}</Text>

      <Text testID="temp-current" style={styles.actual}>
        {`${actual}°`}
      </Text>

      <View style={styles.row}>
        <Text testID="temp-min" style={styles.minMax}>
          {`${min}°`}
        </Text>

        <Text style={styles.separator}> | </Text>

        <Text testID="temp-max" style={styles.minMax}>
          {`${max}°`}
        </Text>
      </View>

      <Text style={styles.labels}>
        MÍNIMO     MÁXIMO
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  dia: {
    fontSize: 16,
    marginBottom: 5,
  },
  actual: {
    fontSize: 80,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  minMax: {
    fontSize: 20,
  },
  separator: {
    fontSize: 20,
    marginHorizontal: 5,
  },
  labels: {
    fontSize: 12,
    color: "gray",
    marginTop: 5,
  },
});