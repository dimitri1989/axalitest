// src/app/page.js

import CitySelect from '@/components/citySelect';

async function getWeatherData(city) {
  //console.log(city);
  const res = await fetch(`http://localhost:3000/api/weather?city=${city}`, {
    next: { revalidate: 60 }, // Optional: Set revalidation interval
  });
  if (!res.ok) {
    throw new Error('Failed to fetch weather data');
  }
  const { weatherData } = await res.json();
  //console.log(weatherData );
  return weatherData;
}

export default async function HomePage() {
  const city = 'tbilisi'; // Change this to dynamically get the city if needed
  let weatherData = null;
  try {
    weatherData = await getWeatherData(city);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }

  if (!weatherData) {
    return <div>Error loading weather data</div>;
  }

  return (
    <div>
      <h1>Weather in Tbilisi</h1>
      <p>Temperature: {weatherData.current.temp_c}°C</p>
      <p>Weather: {weatherData.current.condition.text}</p>
    </div>
  );
}
