const API_KEY = "fa556eda360f7b3277521575b787a4f3"; 

export const getClima = async (ciudad: string) => {
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${ciudad}&lang=es`
  );

  const data = await res.json();
  return data;
};