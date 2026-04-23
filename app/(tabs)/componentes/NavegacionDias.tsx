import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Esto le dice a VS Code que el componente espera estas funciones
interface NavegacionProps {
  onPrev: () => void;
  onNext: () => void;
  fecha: string;
}

export default function NavegacionDias({ onPrev, onNext, fecha }: NavegacionProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity testID="button-prev-day" onPress={onPrev}>
        <Text style={styles.arrow}>{"<"}</Text>
      </TouchableOpacity>
      
      <Text testID="navigation-current-day" style={styles.dateText}>
        {fecha}
      </Text>
      
      <TouchableOpacity testID="button-next-day" onPress={onNext}>
        <Text style={styles.arrow}>{">"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 10 },
  arrow: { fontSize: 30, paddingHorizontal: 20 },
  dateText: { fontSize: 18, fontWeight: 'bold' }
});

