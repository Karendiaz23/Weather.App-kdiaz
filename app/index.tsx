import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import * as Location from 'expo-location';

import Encabezado from '../src/componentes/Encabezado';
import NavegacionDias from '../src/componentes/NavegacionDias';
import IconoClima from '../src/componentes/IconoClima';
import Temperatura from '../src/componentes/Temperatura';
import Metricas from '../src/componentes/Metricas';

export default function WeatherApp() {
  const [datosClima, setDatosClima] = useState<any>(null);
  const [indiceDia, setIndiceDia] = useState(0);

  let navigation: any;
  try {
    navigation = useNavigation();
  } catch {}

  useEffect(() => {
    navigation?.setOptions({ headerShown: false });

    const obtenerClima = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
          console.log("Permiso denegado, usando Buenos Aires");

          const res = await fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=7c76ad6157484f3ebc8184040262304&q=Buenos Aires&days=3&lang=es`
          );
          const data = await res.json();
          setDatosClima(data);
          return;
        }

        const location = await Location.getCurrentPositionAsync({});
        const lat = location.coords.latitude;
        const lon = location.coords.longitude;

        const res = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=7c76ad6157484f3ebc8184040262304&q=${lat},${lon}&days=3&lang=es`
        );

        const data = await res.json();
        setDatosClima(data);

      } catch (error) {
        console.log("Error:", error);
      }
    };

    obtenerClima();
  }, []);

  if (!datosClima) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

  const dias = datosClima.forecast.forecastday;
  const clima = dias[indiceDia];

  const getFecha = (offset: number) => {
    const base = new Date();
    base.setDate(base.getDate() + (indiceDia + offset - 1));
    return `${base.getMonth() + 1}/${base.getDate()}`;
  };

  const fechaPrev = indiceDia > 0 ? getFecha(-1) : "";
  const fechaActual = getFecha(0);
  const fechaNext = indiceDia < dias.length - 1 ? getFecha(1) : "";

  return (
    <View style={styles.container} testID="screen-weather">

      <View style={styles.top}>
        <NavegacionDias
          fechaPrev={fechaPrev}
          fechaActual={fechaActual}
          fechaNext={fechaNext}
          onPrev={() => setIndiceDia(prev => Math.max(prev - 1, 0))}
          onNext={() => setIndiceDia(prev => Math.min(prev + 1, dias.length - 1))}
        />

        <Encabezado ciudad={datosClima.location.name} />
      </View>

      <View style={styles.middle}>
        <IconoClima condicion={clima.day.condition.text.toLowerCase()} />
      </View>

      <View style={styles.bottom}>
        <Metricas
          humedad={clima.day.avghumidity}
          presion={datosClima.current.pressure_mb}
          viento={clima.day.maxwind_kph}
        />

        <Temperatura
          actual={
            indiceDia === 0
              ? Math.round(datosClima.current.temp_c) 
              : Math.round(clima.day.avgtemp_c)
          }
          min={Math.round(clima.day.mintemp_c)}
          max={Math.round(clima.day.maxtemp_c)}
          dia={indiceDia === 0 ? "AYER" : indiceDia === 1 ? "HOY" : "MAÑANA"}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  top: { flex: 1, alignItems: "center", justifyContent: "center" },
  middle: { flex: 1.2, alignItems: "center", marginTop: 20 },
  bottom: { flex: 1.5, alignItems: "center" },
});