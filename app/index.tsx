import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Encabezado from '../src/componentes/Encabezado';
import NavegacionDias from '../src/componentes/NavegacionDias';
import IconoClima from '../src/componentes/IconoClima';
import Temperatura from '../src/componentes/Temperatura';
import Metricas from '../src/componentes/Metricas';

export default function WeatherApp() {
  const [datosClima, setDatosClima] = useState<any>(null);
  const [indiceDia, setIndiceDia] = useState(1);

  let navigation: any;
  try { navigation = useNavigation(); } catch {}

  useEffect(() => {
    navigation?.setOptions({ headerShown: false });

    fetch(`https://api.weatherapi.com/v1/forecast.json?key=7c76ad6157484f3ebc8184040262304&q=Buenos Aires&days=3&lang=es`)
      .then(r => r.json())
      .then(setDatosClima)
      .catch(() => {});
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
const fechaPrev =
  indiceDia > 0 ? getFecha(-1) : "";

const fechaActual = getFecha(0);

const fechaNext =
  indiceDia < dias.length - 1 ? getFecha(1) : "";
  return (
    <View style={styles.container} testID="screen-weather">
      <View style={styles.top}>
        <NavegacionDias
        fechaPrev={fechaPrev}
        fechaActual={fechaActual}
        fechaNext={fechaNext}
        onPrev={() => indiceDia > 0 && setIndiceDia(indiceDia - 1)}
        onNext={() => indiceDia < dias.length - 1 && setIndiceDia(indiceDia + 1)}
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
        actual={Math.round(clima.day.avgtemp_c)}
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