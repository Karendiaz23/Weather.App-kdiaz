import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

import Encabezado from '../src/componentes/Encabezado';
import NavegacionDias from '../src/componentes/NavegacionDias';
import IconoClima from '../src/componentes/IconoClima';
import Temperatura from '../src/componentes/Temperatura';
import Metricas from '../src/componentes/Metricas';

export default function WeatherApp() {
  const [datosClima, setDatosClima] = useState<any>(null);
  const [indiceDia, setIndiceDia] = useState(1); 
  const [cargando, setCargando] = useState(true);

  const API_KEY = '7c76ad6157484f3ebc8184040262304';
  const CIUDAD = 'Buenos Aires';

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${CIUDAD}&days=3&lang=es`
    )
      .then(res => res.json())
      .then(data => {
        setDatosClima(data);
        setCargando(false);
      });
  }, []);

  if (cargando || !datosClima) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

 
  const getFecha = (offset: number) => {
    const fecha = new Date();
    fecha.setDate(fecha.getDate() + offset);
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    return `${mes}/${dia}`;
  };

  
  const dias = datosClima.forecast.forecastday;
  const climaFake = [
    dias[0], 
    dias[0],
    dias[1], 
  ];

  const clima = climaFake[indiceDia];

  return (
    <View testID="screen-weather" style={styles.container}>

      <NavegacionDias
        fecha={
          indiceDia === 0
            ? getFecha(-1)
            : indiceDia === 1
            ? getFecha(0)
            : getFecha(1)
        }
        onPrev={() => indiceDia > 0 && setIndiceDia(indiceDia - 1)}
        onNext={() => indiceDia < 2 && setIndiceDia(indiceDia + 1)}
      />

      <Encabezado ciudad={datosClima.location.name} />

      <IconoClima condicion={clima.day.condition.text.toLowerCase()} />

      <Metricas
        humedad={clima.day.avghumidity}
        presion={datosClima.current.pressure_mb}
        viento={clima.day.maxwind_kph}
      />

      <Temperatura
        actual={Math.round(clima.day.avgtemp_c)}
        min={Math.round(clima.day.mintemp_c)}
        max={Math.round(clima.day.maxtemp_c)}
        indiceDia={indiceDia}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});