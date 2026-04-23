import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface EncabezadoProps {
  ciudad: string;
}

export default function Encabezado({ ciudad }: EncabezadoProps) {
  return (
    <Text testID="header-city" style={styles.header}>
      {ciudad.toUpperCase()}
    </Text>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    fontWeight: '900', // Más pesado, como en la foto
    textAlign: 'center',
    marginTop: 60, // Espacio superior
    marginBottom: 10,
    letterSpacing: 2, // Espaciado entre letras
    color: 'black',
  },
});

