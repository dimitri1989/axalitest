// components/CitySelect.js
'use client'
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from 'next/navigation';
import { useState,useEffect } from "react";

const cities = [
 
  { value: "/abastumani", label: "აბასთუმანი" },
  { value: "/adigeni", label: "ადიგენი" },
  { value: "/anaklia", label: "ანაკლია" },
  { value: "/Akhalk’alak’i", label: "ახალქალაქი" },
  { value: "/akhaltsikhe", label: "ახალციხე" },
  { value: "/batumi", label: "ბათუმი" },
  { value: "/bakuriani", label: "ბაკურიანი" },
  { value: "/bolnisi", label: "ბოლნისი" },
  { value: "/borjomi", label: "ბორჯომი" },
  { value: "/gonio", label: "გონიო" },
  { value: "/Gori", label: "გორი" },
  { value: "/gudauri", label: "გუდაური" },
  { value: "/gurjaani", label: "გურჯაანი" },
  { value: "/davit-gareji", label: "დავით-გარეჯი" },
  { value: "/zestafoni", label: "ზესტაფონი" },
  { value: "/zugdidi", label: "ზუგდიდი" },
  { value: "/tbilisi", label: "თბილისი" },
  { value: "/telavi", label: "თელავი" },
  { value: "/tianeti", label: "თიანეთი" },
  { value: "/lagodekhi", label: "ლაგოდეხი" },
  { value: "/lanchkhuti", label: "ლანჩხუთი" },
  { value: "/manglisi", label: "მანგლისი" },
  { value: "/marneuli", label: "მარნეული" },
  { value: "/martvili", label: "მარტვილი" },
  { value: "/mestia", label: "მესტია" },
  { value: "/mtskheta", label: "მცხეთა" },
  { value: "/ozurgeti", label: "ოზურგეთი" },
  { value: "/omalo", label: "ომალო" },
  { value: "/oni", label: "ონი" },
  { value: "/rustavi", label: "რუსთავი" },
  { value: "/sagarejo", label: "საგარეჯო" },
  { value: "/samtredia", label: "სამტრედია" },
  { value: "/sachkhere", label: "საჩხერე" },
  { value: "/senaki", label: "სენაკი" },
  { value: "/sioni", label: "სიონი" },
  { value: "/signagi", label: "სიღნაღი" },
  { value: "/sukhumi", label: "სოხუმი" },
  { value: "/surami", label: "სურამი" },
  { value: "/ureki", label: "ურეკი" },
  { value: "/ushguli", label: "უშგული" },
  { value: "/poti", label: "ფოთი" },
  { value: "/kobuleti", label: "ქობულეთი" },
  { value: "/kutaisi", label: "ქუთაისი" },
  { value: "/shatili", label: "შატილი" },
  { value: "/shekvetili", label: "შეკვეთილი" },
  { value: "/shovi", label: "შოვი" },
  { value: "/chokhatauri", label: "ჩოხატაური" },
  { value: "/tskhinvali", label: "ცხინვალი" },
  { value: "/tsinandali", label: "წინანდალი" },
  { value: "/tskneti", label: "წყნეთი" },
  { value: "/tsaghveri", label: "წაღვერი" },
  { value: "/chiatura", label: "ჭიათურა" },
  { value: "/kharagauli", label: "ხარაგაული" },
  { value: "/khashuri", label: "ხაშური" },
  { value: "/khobi", label: "ხობი" },
  { value: "/dmanisi", label: "დმანისი" },
];

export default function CitySelect({defaultCity }) {
  const router = useRouter();
  const [currentCity,setcity] = useState("tbilisi");
//   useEffect(() => {
//     setcity(defaultCity);
//   }, [defaultCity]);
//console.log("darenderda");
  const handleChange = (e) => {
    const selectedCity = e.target.value;
    router.push(selectedCity);
    setcity(selectedCity.slice(1))
    //console.log(selectedCity.slice(1));
    //console.log(currentCity);
  };

  return (
    <div className="select-contanier d-flex">
    <select title="აირჩიე ქალაქი"
      aria-label="select"
      onChange={handleChange}
      className="form-control city_select focus-ring"
      data-style="btn-default"
      data-live-search="true"
      value={`/${currentCity}`}
      
    >
      {cities.map(city => (
        <option key={city.value} value={city.value}>
          {city.label}
        </option>
      ))}
      
    </select>
    <IoIosArrowDown className="pos" />
    </div>
  );
}
