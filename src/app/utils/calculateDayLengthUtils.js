export function calculateDayLength(sunrise, sunset) {
    const [sunriseHours, sunriseMinutes, sunriseSeconds] = sunrise
      .split(':')
      .map(Number);
    const [sunsetHours, sunsetMinutes, sunsetSeconds] = sunset
      .split(':')
      .map(Number);

    const sunriseTimeInSeconds =
      sunriseHours * 3600 + sunriseMinutes * 60 + sunriseSeconds;
    const sunsetTimeInSeconds =
      sunsetHours * 3600 + sunsetMinutes * 60 + sunsetSeconds;

    const dayLengthInSeconds = sunsetTimeInSeconds - sunriseTimeInSeconds;

    const hours = Math.floor(dayLengthInSeconds / 3600);
    const minutes = Math.floor((dayLengthInSeconds % 3600) / 60);
    const seconds = dayLengthInSeconds % 60;

    return `${hours} საათი, ${minutes} წუთი`;
  }