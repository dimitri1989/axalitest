// app/[city]/page.js
import React from 'react';
import CitySelect from '@/components/citySelect';
import Link from 'next/link';
import { WiDayWindy } from 'react-icons/wi';
import { GiSpeedometer } from 'react-icons/gi';
import { GiTimeSynchronization } from 'react-icons/gi';
import { FaRadiation } from 'react-icons/fa';
import { BsMoisture } from 'react-icons/bs';
import { BsCloudRainHeavy } from 'react-icons/bs';
import { FiSunrise } from 'react-icons/fi';
import { FiSunset } from 'react-icons/fi';
import { MdOutlineVisibility } from 'react-icons/md';
import { TbUvIndex } from 'react-icons/tb';
import Image from 'next/image';
import data from '../data/data';
import dataCity from '../data/dataCity';
import { notFound } from 'next/navigation';
import { dateHandler } from '../utils/dateUtils';
import { todayText } from '../utils/todayTextUtils';
import { cityTitle } from '../utils/cityTitleUtils';
import { extractHour } from '../utils/extractHourUtils';
import { wordText } from '../utils/wordTextUtils';
import { calculateDayLength } from '../utils/calculateDayLengthUtils';
import { UV } from '../utils/uvUtils';
import { getCityCoordinates } from '../utils/cityCordinatesUtils';
import { getCityNames } from '../utils/cityNameUtils';
// export async function generateStaticParams() {
//   // Add default cities to pre-render at build time
//   const cities = ['Tbilisi','batumi'];
//   return cities.map(city => ({ city }));
// }
var c = '';
const adress = [];
async function getWeatherData(city, days) {
  
  const coordinates = getCityCoordinates(decodeURIComponent(city));
  const res = await fetch(`http://localhost:3000/api/weather/${coordinates}/${days}`);
  if (!res.ok) {
    notFound();
  }
  const { weatherData } = await res.json();

  //console.log(weatherData);
  return weatherData;
}

export async function generateMetadata({ params }) {
  const city = cityTitle(dataCity(), params.city);
  c = city;
  const cityGeo = city ? city.cityGeo : 'უცნობი ქალაქი';
  return {
    title: `amindi ${decodeURIComponent(params.city)} - ამინდი ${cityGeo}`,
    description: `amindi ${decodeURIComponent(
      params.city
    )} - ამინდი ${cityGeo} ,  ყველაზე უახლესი და ზუსტი ინფორმაცია საათობრივი და დღიური პროგნოზებით ამინდის პროგნოზი ${cityGeo} , amindis prognozi ${decodeURIComponent(
      params.city
    )} `,
    keywords: `${decodeURIComponent(
      params.city
    )}, ამინდი, ${cityGeo}, პროგნოზი, ბათუმში პროგნოზი ამინდის, amindi batumshi`,
  };
}

export default async function WeatherPage({ params }) {
  const weatherData = await getWeatherData(params.city);
  adress.push(params.city);
  // Example usage
  try {
    const day = dateHandler('2024-08-17');
  } catch (error) {
    console.error(error.message);
  }
  // function translateWord(weatherData,wordsarray){
  //   //console.log(weatherData);
  //   const words = weatherData.map((word)=>{
  //     return word
  //   })
  //   return words
  // }
  // async function translateSummary(summary) {
  //   const translatedSummary = await translateText(summary, 'ka');
  //   return translatedSummary;
  // }
  //console.log(translateWord(weatherData.days,data()));
  // function cityName() {
  //   console.log(cityName);
  //   const cityNamess = cityNames.find((city) => {
  //     if (
  //       city.city.toLowerCase() === params.city.toLowerCase() ||
  //       city.cityGeo === decodeURIComponent(params.city)
  //     ) {
  //       return city.cityGeo;
  //     }
  //   });
  // }

  //console.log(cityName(dataCity(),params));
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-lg-4 col-md-4 bgcolor-left">
          {
            <div className="cityName">
              {getCityNames(weatherData.resolvedAddress.split(' ')[0])}
            </div>
          }
          <div className="today-time">
            {dateHandler(weatherData.days[0].datetime)}
          </div>
          <div className="col-12 d-flex justify-content-center">
            <div className="icon-main">
              <Image
                width={128}
                height={128}
                src={`/${weatherData.days[0].icon}.png`}
                alt="rain"
              />
            </div>
            <div className="text-main">
              <div className="text-min-max">
                <span className="today-min me-2">
                  მინ: {Math.round(weatherData.days[0].tempmin)}
                  <span> o</span>
                </span>
                <span className="today-min">
                  მაქს: {Math.round(weatherData.days[0].tempmax)}
                  <span> o</span>
                </span>
              </div>
              <div className="text-celsius d-flex flex-row align-items-center justify-content-center">
                <span className="today-span">
                  {Math.round(weatherData.days[0].temp)}
                </span>
                <span unit="C" className="today-C">
                  o
                </span>
              </div>
            </div>
          </div>
          <div className="today-info mb-3">
            {
              todayText(weatherData.days[0].conditions, data())[1]
                ? `${todayText(weatherData.days[0].conditions, data())[0]} ${
                    todayText(weatherData.days[0].conditions, data())[1]
                  }`
                : todayText(weatherData.days[0].conditions, data())[0]
              // {wordText(item)[1]
              //   ? `${wordText(item)[0]} ${wordText(item)[1]}`
              //   : wordText(item)[0]}
            }
          </div>
          <div className="col-12">
            <div className="col-12 d-flex w-100 justify-content-between">
              <div className="col-6 ">
                <Link
                  className="day-details btn btn-primary "
                  href={`${
                    adress[adress.length - 1]
                  }/30-dgis-amindis-prognozi`}>
                  30 დღის
                </Link>
              </div>
              <div className="col-6 ">
                <Link
                  className="day-details btn btn-primary"
                  href={`${
                    adress[adress.length - 1]
                  }/25-dgis-amindis-prognozi`}>
                  25 დღის
                </Link>
              </div>
            </div>
            <div className="col-12 d-flex w-100 justify-content-between mt-3">
              <div className="col-6 ">
                <Link
                  className="day-details btn btn-primary "
                  href={`${
                    adress[adress.length - 1]
                  }/16-dgis-amindis-prognozi`}>
                  16 დღის
                </Link>
              </div>
              <div className="col-6 ">
                <Link
                  className="day-details btn btn-primary "
                  href={`${
                    adress[adress.length - 1]
                  }/12-dgis-amindis-prognozi`}>
                  12 დღის
                </Link>
              </div>
            </div>
            <div className="col-12 d-flex w-100 justify-content-between mt-3">
              <div className="col-12 ">
                <Link
                  className="day-details btn btn-primary ms-2"
                  href={`${adress[adress.length - 1]}/7-dgis-amindis-prognozi`}>
                  7 დღის
                </Link>
              </div>
            </div>
            <hr />
            <div className="row left-Hours mb-2">
              <div className="col-12  ">
                <h2 className="left-time">
                  <Link
                    className="left-day-details "
                    href={`${adress[adress.length - 1]}/hourly`}>
                    ამინდი საათების მიხედვით
                  </Link>
                </h2>
              </div>
              <div className="row ">
                {weatherData.days[0].hours.map((item, index) => {
                  // const days = dateHandler(item.datetime);
                  // var counter = [];
                  // for (let i = 0; i < data().length; i++) {
                  //   if (item.conditions.includes(data()[i].words)) {
                  //     if (counter.length < 2) {
                  //       counter.push(data()[i].translate);
                  //       if (counter.length === 3) {
                  //         break;
                  //       }
                  //     }
                  //   }
                  // }

                  return (
                    index < 5 && (
                      <div className="row" key={index}>
                        <div className="col-4 col-sm-5 pt-3" key={index}>
                          <span className="today-hours">
                            {extractHour(item.datetime)} საათი
                          </span>
                        </div>
                        <div className="col-4 left-hourly-img">
                          <Image
                            title={
                              wordText(item)[1]
                                ? `${wordText(item)[0]} ${wordText(item)[1]}`
                                : wordText(item)[0]
                            }
                            src={`/${item.icon}.png`}
                            width={50}
                            height={50}
                            alt={`${item.icon}`}
                          />
                        </div>
                        <div className="col-4 col-sm-3 pt-3 test">
                          <span className="today-min left-temp">
                            {Math.round(item.temp)}
                            <span>&nbsp;o</span>
                          </span>
                        </div>
                      </div>
                    )
                  );
                })}
              </div>
            </div>
            <Link
              className="left-day-details"
              href={`${adress[adress.length - 1]}/hourly`}>
              იხილეთ სრულად
            </Link>
            <hr />
            <div className="left-menu  ">
              <div className="left-menu__speed d-flex">
                <div className="left-menu__iconWeather d-flex justify-content-center align-items-center">
                  <div className="left-menu__iconWeather-img"></div>
                  <div className="left-menu__iconWeather-img2"></div>
                </div>
                <div className="left-menu__wheaterInfo">
                  <div className="left-menu__wheatewneva d-flex">
                    <div className="left-menu__wheatewnevaIcon">
                      <GiSpeedometer />
                    </div>
                    <div className="col-12 mt-1 ms-1 ">
                      <div className="wneva-text">წნევა</div>
                      <div className="col-12 wneva-text3">
                        {(weatherData.days[0].pressure / 10).toFixed(2)} kpa
                      </div>
                    </div>
                  </div>
                  <div className="left-menu__wheatewneva d-flex">
                    <div className="left-menu__wheatewnevaIcon">
                      <WiDayWindy />
                    </div>
                    <div className="col-12 mt-1 ms-1 ">
                      <div className="wneva-text wneva-text2 ">
                        ქარის სიჩქარე
                      </div>
                      <div className="col-12 wneva-text3">
                        {Math.round(weatherData.days[0].windspeed)} km-h
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="valuta">ვალუტის კურსი</div>
          </div>
        </div>
        <div className="col-xl-9  col-lg-8 col-md-8 ">
          <div className="right-sunContainer p-3">
            <div className="row d-flex">
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6 sun-m  d-flex flex-column justify-content-center align-items-center">
                <div className="col-12 justify-content-center d-flex">
                  <FaRadiation className="FaRadiation" />
                </div>
                <div className="col-12  justify-content-center d-flex">
                  <div className="wneva-text radiacia">მზის რადიაცია</div>
                </div>
                <div className="col-12 justify-content-center d-flex sun-text">
                  {weatherData.days[0].solarradiation} W/m²
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 sun-m col-sm-6 col-6   d-flex flex-column justify-content-center align-items-center">
                <div className="col-12 justify-content-center d-flex">
                  <BsCloudRainHeavy className="FaRadiation" />
                </div>
                <div className="col-12  justify-content-center d-flex">
                  <div className="wneva-text radiacia">ნალექის ალბათობა</div>
                </div>
                <div className="col-12 justify-content-center d-flex sun-text">
                  {weatherData.days[0].precipprob} %
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6  col-sm-6  col-6 d-flex flex-column justify-content-center align-items-center">
                <div className="col-12 justify-content-center d-flex">
                  <GiTimeSynchronization className="FaRadiation" />
                </div>
                <div className="col-12  justify-content-center d-flex">
                  <div className="wneva-text radiacia">დღის ხანგრძლივობა</div>
                </div>
                <div className="col-12 justify-content-center d-flex sun-text">
                  {calculateDayLength(
                    weatherData.days[0].sunrise,
                    weatherData.days[0].sunset
                  )}
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-6  d-flex flex-column justify-content-center align-items-center">
                <div className="col-12 justify-content-center d-flex">
                  <BsMoisture className="FaRadiation" />
                </div>
                <div className="col-12  justify-content-center d-flex">
                  <div className="wneva-text radiacia">ტენიანობა</div>
                </div>
                <div className="col-12 justify-content-center d-flex sun-text">
                  {weatherData.days[0].humidity} %
                </div>
              </div>
            </div>
          </div>
          <div className="right-sun p-3 mt-2">
            <div className="row d-flex">
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6 sun-m  d-flex flex-column justify-content-center align-items-center">
                <div className="col-12 justify-content-center d-flex">
                  <FiSunrise className="FaRadiation" />
                </div>
                <div className="col-12  justify-content-center d-flex">
                  <div className="wneva-text radiacia">მზის ამოსვლა</div>
                </div>
                <div className="col-12 justify-content-center d-flex sun-text">
                  {weatherData.days[0].sunrise}
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 sun-m col-sm-6 col-6   d-flex flex-column justify-content-center align-items-center">
                <div className="col-12 justify-content-center d-flex">
                  <FiSunset className="FaRadiation" />
                </div>
                <div className="col-12  justify-content-center d-flex">
                  <div className="wneva-text radiacia">მზის ჩასვლა</div>
                </div>
                <div className="col-12 justify-content-center d-flex sun-text">
                  {weatherData.days[0].sunset}
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6  col-sm-6  col-6 d-flex flex-column justify-content-center align-items-center">
                <div className="col-12 justify-content-center d-flex">
                  <MdOutlineVisibility className="FaRadiation" />
                </div>
                <div className="col-12  justify-content-center d-flex">
                  <div className="wneva-text radiacia">ხილვადობა</div>
                </div>
                <div className="col-12 justify-content-center d-flex sun-text">
                  {calculateDayLength(
                    weatherData.days[0].sunrise,
                    weatherData.days[0].sunset
                  )}
                </div>
              </div>
              <div
                title={UV(weatherData.days[0].uvindex)}
                className=" col-xxl-3 col-xl-3 col-lg-6 col-6  d-flex flex-column justify-content-center align-items-center">
                <div className="col-12 justify-content-center d-flex">
                  <TbUvIndex className="FaRadiation" />
                </div>
                <div className="col-12  justify-content-center d-flex">
                  <div className="wneva-text radiaciauv">
                    ულტრაიისფერი გამოსხივება
                  </div>
                </div>
                <div className="col-12 justify-content-center d-flex sun-text">
                  {weatherData.days[0].uvindex}
                </div>
              </div>
            </div>
          </div>
          <div className="rightdays p-3">
            <h1 className="day12Right mt-3 mb-3">12 დღის პროგნოზი</h1>

            <ul className="weater-list d-flex row p-0">
              {weatherData.days.map((item, index) => {
                //console.log(weatherData.address,"2");
                const days = dateHandler(item.datetime);
                var counter = [];
                for (let i = 0; i < data().length; i++) {
                  if (item.conditions.includes(data()[i].words)) {
                    if (counter.length < 2) {
                      counter.push(data()[i].translate);
                      if (counter.length === 3) {
                        break;
                      }
                    }
                  }
                }
                return (
                  index < 12 && (
                    <li
                      key={index}
                      className="col-xxl-3 col-xl-3 col-lg-4 col-md-4  col-sm-6 col-6 ">
                      <div
                        className="weather-info"
                        title={
                          wordText(item)[1]
                            ? `${wordText(item)[0]} ${wordText(item)[1]}`
                            : wordText(item)[0]
                        }>
                        <p className="weather-info__day">
                          {days.split(' ')[0]}
                        </p>
                        <p className="weather-info__dayNum">{`${
                          days.split(' ')[1]
                        } ${days.split(' ')[2]}`}</p>
                        <div className="weather-info__img">
                          <Image
                            width={50}
                            height={50}
                            src={`/icon/${item.icon}.png`}
                            alt={`${item.icon}`}
                          />
                        </div>
                        <div className="weather-info__temp">
                          <span className="today-min  weather-info__temp__text ">
                            {Math.round(item.tempmin)}
                            <span> o &nbsp; &nbsp;</span>
                          </span>
                          <span className="today-min weather-info__temp__text ">
                            {Math.round(item.tempmax)}
                            <span> o</span>
                          </span>
                        </div>
                      </div>

                      {/* <h1>{item.tempmin}</h1> */}
                      {/* <h1>{item.resolvedAddress}</h1> */}
                      <h1>{/* {counter[0]} {counter[1]} {counter[3]} */}</h1>
                    </li>
                  )
                );
              })}
              {/* <li className="col-xxl-3 col-xl-3 col-lg-4 col-md-4  col-sm-6 col-6 ">
                <div className='weather-info'>sd</div>
                </li>
                <li className="col-xxl-3 col-xl-3 col-lg-4 col-md-4  col-sm-6 col-6 ">
                <div className='weather-info'>sd</div>
                </li>
                <li className="col-xxl-3 col-xl-3 col-lg-4 col-md-4  col-sm-6 col-6 ">
                <div className='weather-info'>sd</div>
                </li>
                <li className="col-xxl-3 col-xl-3 col-lg-4 col-md-4  col-sm-6 col-6 ">
                <div className='weather-info'>sd</div>
                </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export const revalidate = 21600; // Revalidate every hour
