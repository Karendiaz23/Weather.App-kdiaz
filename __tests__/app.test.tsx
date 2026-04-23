import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from '../app/index';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        location: { name: 'Tokyo' },
        current: { pressure_mb: 1012 },
        forecast: {
          forecastday: [
            {
              date: '2026-04-22',
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
              date: '2026-04-23',
              day: {
                avgtemp_c: 26,
                mintemp_c: 21,
                maxtemp_c: 29,
                avghumidity: 55,
                maxwind_kph: 10,
                condition: { text: 'Cloudy' },
              },
            },
            {
              date: '2026-04-24',
              day: {
                avgtemp_c: 22,
                mintemp_c: 18,
                maxtemp_c: 25,
                avghumidity: 70,
                maxwind_kph: 20,
                condition: { text: 'Rain' },
              },
            },
          ],
        },
      }),
  })
) as jest.Mock;

describe('Weather App', () => {

  test('renderiza la pantalla principal', async () => {
    const { findByTestId } = render(<App />);
    expect(await findByTestId('screen-weather')).toBeTruthy();
  });

  test('muestra la ciudad', async () => {
    const { findByTestId } = render(<App />);
    const ciudad = await findByTestId('header-city');
    expect(ciudad.props.children).toBe('TOKYO');
  });

  test('muestra la temperatura actual', async () => {
    const { findByTestId } = render(<App />);
    const temp = await findByTestId('temp-current');
    expect(temp.props.children).toMatch(/°/);
  });

  test('muestra temperatura mínima y máxima', async () => {
    const { findByTestId } = render(<App />);
    expect(await findByTestId('temp-min')).toBeTruthy();
    expect(await findByTestId('temp-max')).toBeTruthy();
  });

  test('permite navegar al día siguiente', async () => {
    const { findByTestId } = render(<App />);
    
    const nextBtn = await findByTestId('button-next-day');
    fireEvent.press(nextBtn);

    expect(await findByTestId('navigation-current-day')).toBeTruthy();
  });

  test('renderiza al menos 3 métricas', async () => {
    const { findAllByTestId } = render(<App />);
    const metrics = await findAllByTestId('metric-item');
    expect(metrics.length).toBeGreaterThanOrEqual(3);
  });

});