// app/[city]/[days]/page.js

async function getWeatherData(city, days) {
  const res = await fetch(`http://localhost:3000/api/weather/${city}/${days}`, {
    next: { revalidate: 60 }, // Optional: Set revalidation interval
  });
  if (!res.ok) {
    throw new Error('Failed to fetch weather data');
  }
  const { weatherData } = await res.json();
  return weatherData;
}

export default async function WeatherPage({ params }) {
  const { city, days } = params;  // params ობიექტიდან city და days პარამეტრების წამოღება
  let weatherData = null;
  try {
    weatherData = await getWeatherData(city, days);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }

  if (!weatherData) {
    return <div>Error loading weather data</div>;
  }

  return (
    <div>
     <p>Temperature: {weatherData.currentConditions.temp}°C</p>
    </div>
  );
}
