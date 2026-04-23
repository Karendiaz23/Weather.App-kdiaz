import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ItemMetricaProps {
  valor: string;
  label: string;
}

export default function ItemMetrica({ valor, label }: ItemMetricaProps) {
  return (
    <View testID="metric-item" style={styles.container}>
      {/* Círculo pequeño que simula el icono de la foto */}
      <View style={styles.iconCircle} />
      
      <Text testID="metric-value" style={styles.valueText}>
        {valor}
      </Text>
      
      <Text style={styles.labelText}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  iconCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#000', // Negro como en el diseño minimalista
    marginBottom: 5,
  },
  valueText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  labelText: {
    fontSize: 12,
    color: '#666',
    textTransform: 'capitalize',
  },
});

