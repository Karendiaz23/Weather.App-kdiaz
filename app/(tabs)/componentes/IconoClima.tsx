import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function IconoClima({ condicion = 'cloudy' }) {
  return (
    <View style={styles.container}>
      {/* Usamos el testID dinámico que pide la consigna */}
      <View testID={`icon-weather-${condicion}`} style={styles.circle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
  },
  circle: {
    width: 160,
    height: 160,
    borderRadius: 80, // Círculo perfecto
    borderWidth: 8, // Borde grueso
    borderColor: 'black',
    backgroundColor: 'white',
  },
});

