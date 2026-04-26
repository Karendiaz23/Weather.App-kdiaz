import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface Props {
  valor: string;
  tipo: 'humedad' | 'presion' | 'viento';
}

export default function ItemMetrica({ valor, tipo }: Props) {

  const getIcon = () => {
    switch (tipo) {
      case 'humedad':
        return <Feather name="droplet" size={18} color="black" />;
      case 'presion':
        return <Feather name="circle" size={18} color="black" />;
      case 'viento':
        return <Feather name="wind" size={18} color="black" />;
    }
  };

  return (
    <View style={styles.container} testID="metric-item">
      {getIcon()}
      <Text style={styles.valueText}>{valor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 8,
  },
  valueText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});