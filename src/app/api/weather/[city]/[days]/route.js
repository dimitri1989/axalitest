// app/api/weather/[city]/[days]/route.js
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { city, days } = params;

  // თქვენი API კლავიატის დატვირთვა და პარამეტრების ინტეგრაცია
  const res = await fetch(`https://www.meteosource.com/api/v1/flexi/point?place_id=${city}&sections=all&timezone=UTC&language=en&units=metric&key=x93skv48sdymqythbj5cunyehb5g249xexa94vvm`);
  if (!res.ok) {
   
    return NextResponse.json({ error: 'Failed to fetch weather data1' }, { status: 500 });
  }

  const weatherData = await res.json();
  return NextResponse.json({ weatherData });
}
//https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&include=hours%2Calerts%2C${days}%2Ccurrent&key=R4JDLD87E5ZQU5LU9LQSNY3ED&contentType=json