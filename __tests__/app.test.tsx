import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
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
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockDatosClima),
    })
  ) as jest.Mock;
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('Weather App ', () => {

  test('renderiza pantalla principal', async () => {
    const { getByTestId } = render(<App />);

    await waitFor(() => {
      expect(getByTestId('screen-weather')).toBeTruthy();
    });
  });

  test('muestra la ciudad correctamente', async () => {
    const { getByTestId } = render(<App />);

    await waitFor(() => {
      expect(getByTestId('header-city'))
        .toHaveTextContent('BUENOS AIRES');
    });
  });

  test('muestra temperatura actual', async () => {
    const { getByTestId } = render(<App />);

    await waitFor(() => {
      expect(getByTestId('temp-current'))
        .toHaveTextContent('14°');
    });
  });

  test('muestra min y max', async () => {
    const { getByTestId } = render(<App />);

    await waitFor(() => {
      expect(getByTestId('temp-min'))
        .toHaveTextContent('11°');

      expect(getByTestId('temp-max'))
        .toHaveTextContent('19°');
    });
  });

  test('navega al siguiente día', async () => {
    const { getByTestId } = render(<App />);

    const btn = await waitFor(() =>
      getByTestId('button-next-day')
    );

    fireEvent.press(btn);

    await waitFor(() => {
      expect(getByTestId('temp-current'))
        .toHaveTextContent('13°');
    });
  });

  test('renderiza métricas', async () => {
    const { getAllByTestId } = render(<App />);

    await waitFor(() => {
      expect(getAllByTestId('metric-item').length)
        .toBeGreaterThanOrEqual(3);
    });
  });

});