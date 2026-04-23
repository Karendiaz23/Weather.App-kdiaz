import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import Encabezado from './componentes/Encabezado';
import NavegacionDias from './componentes/NavegacionDias';
import IconoClima from './componentes/IconoClima';
import Temperatura from './componentes/Temperatura';
import Metricas from './componentes/Metricas';

export default function WeatherApp() {
  const [datosClima, setDatosClima] = useState<any>(null);
  const [indiceDia, setIndiceDia] = useState(0); // 0 es hoy, 1 mañana...
  const [cargando, setCargando] = useState(true);

  // Poné acá tu API KEY de OpenWeather
  const API_KEY = 'fa556eda360f7b3277521575b787a4f3';
  const CIUDAD = 'Villa Lugano'; 

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${CIUDAD}&units=metric&appid=${API_KEY}&lang=es`)
      .then(res => res.json())
      .then(data => {
        setDatosClima(data);
        setCargando(false);
      });
  }, []);

  if (cargando) return <ActivityIndicator size="large" style={{flex: 1}} />;

  // OpenWeather devuelve datos cada 3 horas. 
  // Saltamos de a 8 posiciones para pasar al día siguiente (8 * 3hs = 24hs)
  const climaSeleccionado = datosClima.list[indiceDia * 8];

  return (
    <View testID="screen-weather" style={styles.container}>
      <NavegacionDias 
        fecha={climaSeleccionado.dt_txt.split(' ')[0]}
        onPrev={() => indiceDia > 0 && setIndiceDia(indiceDia - 1)}
        onNext={() => indiceDia < 4 && setIndiceDia(indiceDia + 1)}
      />
      
      <Encabezado ciudad={datosClima.city.name} />
      
      <IconoClima condicion={climaSeleccionado.weather[0].main.toLowerCase()} />

      <Temperatura 
        actual={Math.round(climaSeleccionado.main.temp)} 
        min={Math.round(climaSeleccionado.main.temp_min)} 
        max={Math.round(climaSeleccionado.main.temp_max)} 
      />

      <Metricas 
        humedad={climaSeleccionado.main.humidity} 
        presion={climaSeleccionado.main.pressure} 
        viento={climaSeleccionado.wind.speed} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', paddingTop: 50 },
});

