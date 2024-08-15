// export function SumWeatherInfo(address, weatherData, startDate) {
//     // if (address !== "25" && address !== "30") {
//     //   return weatherData; // თუ address არ არის "25" ან "30", დაუბრუნოს მთლიანი weatherData
//     // }
  
//     const objectWeather = [];
//     const numDays = 30;
//     const start = new Date(startDate); // ბოლო ცნობილი თარიღი
  
//     for (let x = 0; x < numDays; x++) {
//       const currentDate = new Date(start); // ახალი თარიღი მიმდინარე ციკლისთვის
//       currentDate.setDate(start.getDate() + x); // დაამატოს x დღე
  
//       // შემოწმება, რომ თარიღი სწორ თვეშია
//       if (currentDate.getMonth() !== start.getMonth()) {
//         break; // თუ თვის ბოლო და ახალი თარიღი შემდეგი თვისაა, გაწვდოს ციკლი
//       }
  
//       if (x < 15) {
//         objectWeather.push({
//           date: currentDate.toISOString().split('T')[0], // თარიღის ფორმატირება
//           weather: weatherData[x]
//         });
//         console.log(objectWeather.length);
//       } else {
//         objectWeather.push({
//           date: currentDate.toISOString().split('T')[0], // თარიღის ფორმატირება
//           weather: weatherData[Math.floor(Math.random() * 15)]
          
//         });
//         //console.log(objectWeather.length);
//       }
//     }
  
//     return objectWeather;
//   }
export function SumWeatherInfo(address, weatherData, startDate) {
    // const address is not used in the updated code
    // if (address !== "25" && address !== "30") {
    //   return weatherData; // if address is not "25" or "30", return entire weatherData
    // }
  
    const objectWeather = [];
    const numDays = 30;
    let currentDate = new Date(startDate); // last known date
  
    while (objectWeather.length < numDays) {
      // Check if we have reached the maximum number of days
      if (objectWeather.length >= numDays) {
        break;
      }
  
      // If the date is within the current month, use it
      if (currentDate.getMonth() === (new Date(startDate)).getMonth()) {
        if (objectWeather.length < 15) {
          objectWeather.push({
            date: currentDate.toISOString().split('T')[0], // format date
            weather: weatherData[objectWeather.length] // take weatherData accordingly
          });
        } else {
          objectWeather.push({
            date: currentDate.toISOString().split('T')[0], // format date
            weather: weatherData[Math.floor(Math.random() * weatherData.length)] // use random weather data
          });
        }
        
        // Increment the date by 1 day
        currentDate.setDate(currentDate.getDate() + 1);
      } else {
        // If the date exceeds the current month, start the new month
        currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
      }
    }
  
    return objectWeather;
  }
  
  // Example usage
  const startDate = "2024-08-16"; // Last known date
//   console.log(SumWeatherInfo("25", weatherData.days, startDate));
  