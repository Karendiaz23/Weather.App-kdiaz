import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from '../app/index';

const mockDatosClima = {
  location: { name: 'BUENOS AIRES' },
  current: { pressure_mb: 1016 },
  forecast: {
    forecastday: [
      {
        day: {
          avgtemp_c: 25,
          mintemp_c: 20,
          maxtemp_c: 28,
          avghumidity: 60,
          maxwind_kph: 15,
          condition: { text: 'Sunny' },
        },
      },
      {
        day: {
          avgtemp_c: 14,
          mintemp_c: 11,
          maxtemp_c: 19,
          avghumidity: 67,
          maxwind_kph: 23,
          condition: { text: 'Cloudy' },
        },
      },
      {
        day: {
          avgtemp_c: 13,
          mintemp_c: 10,
          maxtemp_c: 18,
          avghumidity: 70,
          maxwind_kph: 20,
          condition: { text: 'Rain' },
        },
      },
    ],
  },
};

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({
    json: () => Promise.resolve(mockDatosClima),
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('Weather App', () => {

  test('renderiza pantalla principal', async () => {
    const { findByTestId } = render(<App />);
    const screen = await findByTestId('screen-weather');
    expect(screen).toBeTruthy();
  });

  test('muestra la ciudad correctamente', async () => {
    const { findByTestId } = render(<App />);
    const city = await findByTestId('header-city');

    expect(city.props.children).toContain('BUENOS AIRES');
  });

  test('muestra temperatura actual', async () => {
    const { findByTestId } = render(<App />);
    const temp = await findByTestId('temp-current');

    expect(temp.props.children).toContain('25°');
  });

  test('muestra min y max', async () => {
    const { findByTestId } = render(<App />);

    const min = await findByTestId('temp-min');
    const max = await findByTestId('temp-max');

    expect(min.props.children).toContain('20°');
    expect(max.props.children).toContain('28°');
  });

  test('navega al siguiente día', async () => {
    const { findByTestId } = render(<App />);

    const btn = await findByTestId('button-next-day');
    fireEvent.press(btn);

    const temp = await findByTestId('temp-current');

    expect(temp.props.children).toContain('14°');
  });

  test('renderiza métricas', async () => {
    const { findAllByTestId } = render(<App />);

    const items = await findAllByTestId('metric-item');

    expect(items.length).toBeGreaterThanOrEqual(3);
  });

});