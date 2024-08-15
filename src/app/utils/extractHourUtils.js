export function extractHour(timeStr) {
    // მიაწვდილი დროის სტრიქონის ფორმატი უნდა იყოს 'HH:MM:SS'
    const hour = timeStr.split(':')[0];
    const hourInt = parseInt(hour, 10);
    return hourInt === 0 ? 24 : hourInt;
  }