import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from '../(tabs)/index';

describe('Weather App', () => {

  test('renderiza la pantalla principal', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('screen-weather')).toBeTruthy();
  });

  test('muestra la ciudad', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('header-city').props.children).toBe('TOKYO');
  });

  test('muestra la temperatura actual', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('temp-current').props.children).toMatch(/°/);
  });

  test('muestra temperatura mínima y máxima', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('temp-min')).toBeTruthy();
    expect(getByTestId('temp-max')).toBeTruthy();
  });

  test('permite navegar al día siguiente', () => {
    const { getByTestId } = render(<App />);
    
    fireEvent.press(getByTestId('button-next-day'));

    expect(getByTestId('navigation-current-day')).toBeTruthy();
  });

  test('renderiza al menos 3 métricas', () => {
    const { getAllByTestId } = render(<App />);
    expect(getAllByTestId('metric-item').length).toBeGreaterThanOrEqual(3);
  });

});
