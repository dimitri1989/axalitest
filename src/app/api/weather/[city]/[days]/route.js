// app/api/weather/[city]/[days]/route.js
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { city, days } = params;
//console.log(days,city,"route");
  // თქვენი API კლავიატის დატვირთვა და პარამეტრების ინტეგრაცია
  
  const res = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&include=hours%2Calerts%2C${days}%2Ccurrent&key=R4JDLD87E5ZQU5LU9LQSNY3ED&contentType=json`,);
  if (!res.ok) {
   
    return NextResponse.json({ error: 'Failed to fetch weather data1' }, { status: 500 });
  }

  const weatherData = await res.json();
  return NextResponse.json({ weatherData });
}
//https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&include=hours%2Calerts%2C${days}%2Ccurrent&key=R4JDLD87E5ZQU5LU9LQSNY3ED&contentType=json