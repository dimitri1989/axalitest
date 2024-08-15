import dataCity from '../data/dataCity'
export function cityTitle(dataCity, latCity) {
    const decodedCity = decodeURIComponent(latCity);
  
    return dataCity.find(
      (city) =>
        city.city.toLowerCase() === decodedCity.toLowerCase() ||
        city.cityGeo.toLowerCase() === decodedCity
    );
  }