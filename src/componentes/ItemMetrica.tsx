import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface ItemMetricaProps {
  valor: string;
  label: string;
  tipo: 'humedad' | 'presion' | 'viento';
}

export default function ItemMetrica({ valor, label, tipo }: ItemMetricaProps) {

  const getIcon = () => {
    switch (tipo) {
      case 'humedad':
        return <Feather name="droplet" size={16} color="black" />;
      case 'presion':
        return <Feather name="circle" size={16} color="black" />;
      case 'viento':
        return <Feather name="wind" size={16} color="black" />;
      default:
        return null;
    }
  };

  return (
    <View testID="metric-item" style={styles.container}>
      
      <View style={styles.iconContainer}>
        {getIcon()}
      </View>

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

  iconContainer: {
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