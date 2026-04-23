import React from 'react';
import { View, StyleSheet } from 'react-native';
import ItemMetrica from './ItemMetrica'; // Importamos el componente hijo

export default function Metricas() {
  return (
    <View style={styles.row}>
      <ItemMetrica valor="58%" label="Humedad" />
      <ItemMetrica valor="1006 hPa" label="Presión" />
      <ItemMetrica valor="0.8 m/s" label="Viento" />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    bottom: 50, // Lo posiciona abajo de todo como en la imagen
  },
});

