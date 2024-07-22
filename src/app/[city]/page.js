// app/[city]/page.js
import React from 'react';
import CitySelect from '@/components/citySelect';
import Link from 'next/link';
import data from '../data/data'
import translateText from '../services/translate';
async function getWeatherData(city,days) {
  
  //console.log(city,days);
  const res = await fetch(`http://localhost:3000/api/weather/${city}/${days}`);
  if (!res.ok) {
    throw new Error('Failed to fetch weather data1');
  }
  const { weatherData } = await res.json();

  // weatherData.hourly.data.map((item)=>{
  //   var masivi  = []
  //   for(let i=0;i<weatherData.hourly.data.length;i++){
  //     masivi.push({word:item.summary,translate:""})
      
      
  //   }
  // })
  return weatherData;
}


export async function generateStaticParams() {
  // Add default cities to pre-render at build time
  const cities = ['Tbilisi'];
  return cities.map(city => ({ city }));
}

export async function generateMetadata({ params }) {
    
  return { title: `Weather in ${params.city}` };
}

export default async function WeatherPage({ params }) {
  const weatherData = await getWeatherData(params.city);
  function datehandler(datetime){
  const date = new Date(datetime);
  const options = { weekday: 'long' };
  const dayOfWeek = new Intl.DateTimeFormat('ka-GE', options).format(datetime);
return dayOfWeek
  }
  function translateWord(weatherData,wordsarray){
    //console.log(weatherData);
    const words = weatherData.map((word)=>{
      return word
    })
    return words
  }
  async function translateSummary(summary) {
    const translatedSummary = await translateText(summary, 'ka');
    return translatedSummary;
  }
  
  //console.log(translateWord(weatherData.days,data()));
const days = datehandler(weatherData.datetime)
  return (
    <>
      <Link href={`${params.city}/25-dgis-prognozi`}>25 dgis prognozi</Link> 
      
      <h1> {days}</h1>
      <h3>{}</h3>
       {weatherData.daily.data.map((item)=>{
       return <div className='next'>
          <h3>{item.day}</h3>
          <h3>{item.summary}</h3>
        </div>
      })} 
      {
        
      }
      {/* {weatherData.days.map((item)=>{
        var counter = []
        console.log( item.conditions);
        for(let i=0;i<data().length;i++){
          if(item.conditions.includes(data()[i].words)){
            if(counter.length<2){
              counter.push(data()[i].translate)
              if(counter.length ===3){
                break
              }
            }
            
          }
          console.log(counter);
          
        }
        const conditionTranslation = data().find(word => word.words.includes(item.conditions))?.translate || 'Unknown condition';
        return <><h1>{item.tempmax}</h1> 
        <h1>{item.tempmin}</h1> 
        <h1>{counter}</h1> 
        {}
        {item.conditions}
        </>
        
      })} */}
      
      
    </>
  );
}

export const revalidate = 1800; // Revalidate every hour
