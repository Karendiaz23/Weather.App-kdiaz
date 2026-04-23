import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Temperatura({ actual = 25, min = 21, max = 26 }) {
  return (
    <View style={styles.container}>
      <Text testID="temp-min" style={styles.smallTemp}>{min}°</Text>
      <Text testID="temp-current" style={styles.mainTemp}>{actual}°</Text>
      <Text testID="temp-max" style={styles.smallTemp}>{max}°</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'baseline', // Alinea los números por la base
    justifyContent: 'center',
    marginVertical: 20,
  },
  mainTemp: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 20, // Espaciado lateral
  },
  smallTemp: {
    fontSize: 26,
    color: '#555', // Gris oscuro para min/max
  },
});

