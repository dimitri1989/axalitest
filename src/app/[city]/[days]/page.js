// app/[city]/[days]/page.js
import { dateHandler } from '../../utils/dateUtils';
import { todayText } from '../../utils/todayTextUtils';
import { extractHour } from '../../utils/extractHourUtils';
import { wordText } from '../../utils/wordTextUtils';
import { calculateDayLength } from '../../utils/calculateDayLengthUtils';
import { cityTitle } from '../../utils/cityTitleUtils';
import { UV } from '../../utils/uvUtils';
import data from '../../data/data';
import dataCity from '../../data/dataCity';
import { SumWeatherInfo } from '../../utils/sumWeatherInfoUtils';
import { getCityCoordinates } from '../../utils/cityCordinatesUtils';
import { getCityNames } from '../../utils/cityNameUtils';
import Image from 'next/image';
import Link from 'next/link';
import { GiSpeedometer } from 'react-icons/gi';
import { WiDayWindy } from 'react-icons/wi';
import { FaRadiation } from 'react-icons/fa';
import { BsCloudRainHeavy } from 'react-icons/bs';
import { GiTimeSynchronization } from 'react-icons/gi';
import { BsMoisture } from 'react-icons/bs';
import { FiSunrise } from 'react-icons/fi';
import { FiSunset } from 'react-icons/fi';
import { MdOutlineVisibility } from 'react-icons/md';
import { TbUvIndex } from 'react-icons/tb';
var wordAdress = [];
var c = '';
const araayOfaddres = [];

export async function generateMetadata({ params }) {
  const city = cityTitle(dataCity(), params.city);
  c = city;

  const cityGeo = city ? city.cityGeo : 'უცნობი ქალაქი';
  if (params.days === 'hourly') {
    return {
      title: `${decodeURIComponent(
        params.city
      )} 24 saatis prognozi -  ${cityGeo} 24 საათის ამინდის პროგნოზი`,
      description: `24 saatis prognozi ${decodeURIComponent(
        params.city
      )} - 24 საათის პროგნოზი ${cityGeo} ,  ამინდი საატების მიხედვით ყველაზე ზუსტი ამინდის პროგნოზი`,
      keywords: `${decodeURIComponent(
        params.city
      )}, ამინდი საათების მიხედვით, ${cityGeo}, საათობრივი ამინდის პროგნოზი, პროგნოზი, ამინდი.გე, amindi.ge, ამინდის, amindi`,
    };
  }
  if (
    params.days === '30-dgis-amindis-prognozi' ||
    params.days === '25-dgis-amindis-prognozi' ||
    params.days === '16-dgis-amindis-prognozi' ||
    params.days === '12-dgis-amindis-prognozi' ||
    params.days === '7-dgis-amindis-prognozi'
  ) {
    return {
      title: `${
        params.days.split('-')[0]
      } dgis amindis prognozi ${decodeURIComponent(params.city)} - ${
        params.days.split('-')[0]
      } დღის ამინდის პროგნოზი ${cityGeo}`,
      description: `${
        params.days.split('-')[0]
      } dgis amindis prognozi ${decodeURIComponent(params.city)} - ${
        params.days.split('-')[0]
      } დღის ამინდის პროგნოზი ${cityGeo}, ამინდის პროგნოზი დღეების მიხედვით, amindis prognozi dgeebis mixedvit, ამინდის პროგნოზი თბილისში, ამინდის პროგნოზი საქართველოში`,
      keywords: `${decodeURIComponent(
        params.city
      )}, ამინდი დღეების მიხედვით, ${cityGeo}, ამინდი ხვალ, პროგნოზი, ამინდი.გე, amindi.ge, ამინდის, amindi, ხვალ ამინდი, dgeebis mixedvit amindis prognozi`,
    };
  }
}


async function getWeatherData(city, days) {
  const coordinates = getCityCoordinates(decodeURIComponent(city));

  if (!coordinates) {
    throw new Error('ქალაქი არ მოიძებნა ან არ არის მხარდაჭერილი');
  }
  araayOfaddres.push(days.split('-')[0]);
  const res = await fetch(`http://localhost:3000/api/weather/${coordinates}/${days}`, {
    next: { revalidate: 21600 }, // Optional: Set revalidation interval
  });
  if (!res.ok) {
    throw new Error('Failed to fetch weather data');
  }

  const { weatherData } = await res.json();

  return weatherData;
}

function extendWeatherData(weatherData, additionalDays) {
  const extendedData = [...weatherData.days];

  for (const day of extendedData) {
    if (!day.datetime) {
      console.error('Missing datetime property in:', day);
      throw new Error('Missing datetime property in weather data');
    }

    const date = new Date(day.datetime);
    if (isNaN(date)) {
      console.error('Invalid date found:', day.datetime);
      throw new Error('Invalid date in weather data');
    }
  }

  for (let i = 1; i <= additionalDays; i++) {
    const lastDay = new Date(extendedData[extendedData.length - 1].datetime);
    const nextDay = new Date(lastDay);
    nextDay.setDate(lastDay.getDate() + 1);

    const newDayData = {
      ...extendedData[extendedData.length - 1],
      datetime: nextDay.toISOString().split('T')[0], // Update date to the next day
    };

    extendedData.push(newDayData);
  }

  return extendedData;
}

export default async function WeatherPage({ params }) {
  const { city, days } = params; // params ობიექტიდან city და days პარამეტრების წამოღება
  let weatherData = null;
  try {
    weatherData = await getWeatherData(city, days);
    wordAdress.push(days);
    var lastWord =
      wordAdress[wordAdress.length - 1] === 'hourly'
        ? wordAdress[wordAdress.length - 1]
        : '';
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }

  if (!weatherData) {
    return <div>Error loading weather data</div>;
  }

  let extendedWeatherData;
  try {
    extendedWeatherData = {
      ...weatherData,
      days: extendWeatherData(weatherData, 10),
    };
  } catch (error) {
    console.error('Error extending weather data:', error);
    return <div>Error extending weather data</div>;
  }

  const startDate = weatherData.days[0].datetime;
 
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
                  href={`./30-dgis-amindis-prognozi`}>
                  30 დღის
                </Link>
              </div>
              <div className="col-6 ">
                <Link
                  className="day-details btn btn-primary"
                  href={`./25-dgis-amindis-prognozi`}>
                  25 დღის
                </Link>
              </div>
            </div>
            <div className="col-12 d-flex w-100 justify-content-between mt-3">
              <div className="col-6 ">
                <Link
                  className="day-details btn btn-primary "
                  href={`./16-dgis-amindis-prognozi`}>
                  16 დღის
                </Link>
              </div>
              <div className="col-6 ">
                <Link
                  className="day-details btn btn-primary "
                  href={`./12-dgis-amindis-prognozi`}>
                  12 დღის
                </Link>
              </div>
            </div>
            <div className="col-12 d-flex w-100 justify-content-between mt-3">
              <div className="col-12 ">
                <Link
                  className="day-details btn btn-primary ms-2"
                  href={`./7-dgis-amindis-prognozi`}>
                  7 დღის
                </Link>
              </div>
            </div>
            <hr />
            <div className="row left-Hours mb-2">
              <div className="col-12  ">
                <h2 className="left-time">
                  <Link className="left-day-details " href={`./hourly`}>
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
            <Link className="left-day-details" href={`./hourly`}>
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
        <div className="col-xl-9  col-lg-8 col-md-8">
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
            {lastWord && (
              <>
                <h1 className="day12Right mt-3 mb-3">
                  ამინდი საათების მიხედვით
                </h1>
                <ul className="weater-list d-flex row p-0">
                  {weatherData.days[0].hours.map((item, index) => {
                    // const days = dateHandler(it.em.datetime);
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
                      <>
                        <li
                          title={
                            wordText(item)[1]
                              ? `${wordText(item)[0]} ${wordText(item)[1]}`
                              : wordText(item)[0]
                          }
                          className=" col-xxl-3 col-xl-3 col-lg-4 col-md-4  col-sm-6 col-6"
                          key={index}>
                          <div class="weather-info pt-4">
                            {extractHour(item.datetime)} საათი
                            <div class="weather-info__img">
                              <Image
                                src={`/${item.icon}.png`}
                                width={50}
                                height={50}
                                alt={`${item.icon}`}
                              />
                              <div class="weather-info__temp">
                                <span class="today-min  weather-info__temp__text ">
                                  {Math.round(item.temp)}
                                  <span> o &nbsp; &nbsp;</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </>
            )}

            <h1 className="day12Right mt-3 mb-3">
              {araayOfaddres[araayOfaddres.length - 1]} დღის ამინდის პროგნოზი
            </h1>
            <ul className="weater-list d-flex row p-0">
              {SumWeatherInfo(
                araayOfaddres[araayOfaddres.length - 1],
                weatherData.days,
                startDate
              ).map((item, index) => {
                //console.log(weatherData.address,"2");

                const days = dateHandler(item.date);

                var counter = [];
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
                  index < araayOfaddres[araayOfaddres.length - 1] && (
                    <li
                      key={index}
                      className="col-xxl-3 col-xl-3 col-lg-4 col-md-4  col-sm-6 col-6 ">
                      <div
                        className="weather-info"
                        title={
                          wordText(item.weather)[1]
                            ? `${wordText(item.weather)[0]} ${
                                wordText(item.weather)[1]
                              }`
                            : wordText(item.weather)[0]
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
                            src={`/icon/${item.weather.icon}.png`}
                            alt={`${item.weather.icon}`}
                          />
                        </div>
                        <div className="weather-info__temp">
                          <span className="today-min  weather-info__temp__text ">
                            {Math.round(item.weather.tempmin)}
                            <span> o &nbsp; &nbsp;</span>
                          </span>
                          <span className="today-min weather-info__temp__text ">
                            {Math.round(item.weather.tempmax)}
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export const revalidate = 21600; // Revalidate every hour
