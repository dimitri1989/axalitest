export default  function dataHandler(){
    const obwheater = [
        {
          words: 'Sky cover',
          translate: 'მოღრუბლული',
        },
        {
          words: 'Wind direction',
          translate: 'ქარის მიმართულება',
        },
        {
          words: 'Temperature',
          translate: 'ტემპერატურა',
        },
        {
          words: 'Dew Point',
          translate: 'Ნამის წერტილი',
        },
        {
          words: 'humidity',
          translate: 'ტენიანობა',
        },
        {
          words: 'Heat Index',
          translate: 'სითბოს ინდექსი',
        },
        {
          words: 'Maximum Temperature',
          translate: 'მაქსიმალური ტემპერატურა',
        },
        {
          words: 'Minimum Temperature',
          translate: 'მინიმალურიი ტემპერატურა',
        },
        {
          words: 'Wind Speed',
          translate: 'ქარის სიჩქარე',
        },
        {
          words: 'Wind Gust',
          translate: 'ქარის ნაკადი',
        },
        {
          words: 'precip',
          translate: 'ნალექები',
        },
        {
          words: 'Estimated precipitation',
          translate: 'სავარაუდო ნალექი',
        },
        {
          words: 'address',
          translate: 'მისამართი',
        },
        {
          words: 'Sea Level Pressure',
          translate: 'ზღვის დონის წნევა',
        },
        {
          words: 'Mean Station Distance',
          translate: 'საშუალო მანძილი სადგურამდე',
        },
        {
          words: 'Chance Precipitation (%)',
          translate: 'ნალექის ალბათობა (%)',
        },
        {
          words: 'Snow',
          translate: 'თოვლი',
        },
        {
          words: 'Snow Depth',
          translate: 'თოვლის სიღრმე',
        },
        {
          words: 'Wind Chill',
          translate: 'ქარის გაგრილება',
        },
        {
          words: 'Solar Radiation',
          translate: 'Მზის რადიაცია',
        },
        {
          words: 'Solar Energy',
          translate: 'Მზის ენერგია',
        },
        {
          words: 'Sunshine',
          translate: 'მზის შუქი',
        },
        {
          words: 'Contributing Stations',
          translate: 'ხელშემწყობი სადგურები',
        },
        {
          words: 'Weather Type',
          translate: 'ამინდის ტიპი',
        },
        {
          words: 'Blowing Or Drifting Snow',
          translate: 'მოდინებული თოვლი',
        },
        {
          words: 'Drizzle',
          translate: 'ნალექი,წვიმა',
        },
        {
          words: 'Heavy Drizzle',
          translate: 'ძლიერი წვიმა',
        },
        {
          words: 'Light Drizzle',
          translate: 'სუსტი წვიმა',
        },
        {
          words: 'Heavy Drizzle/Rain',
          translate: 'კოკისპირული წვიმა, უმეტესად წვიმა',
        },
        {
          words: 'Light Drizzle/Rain',
          translate: 'უმეტესად წვიმიანი',
        },
        {
          words: 'Dust storm',
          translate: 'მტვრის ქარიშხალი',
        },
        {
          words: 'Fog',
          translate: 'ნისლი',
        },
        {
          words: 'Freezing Drizzle/Freezing Rain',
          translate: 'ყინვა, ყინულის წვიმა',
        },
        {
          words: 'Heavy Freezing Drizzle/Freezing Rain',
          translate: 'ძლიერი წვიმა, ყინულის წვიმა',
        },
        {
          words: 'Freezing Fog',
          translate: 'ყინულოვანი ნისლი',
        },
        {
          words: 'Heavy Freezing Rain',
          translate: 'ძლიერი ყინულიანი წვიმა',
        },
        {
          words: 'Light Freezing Rain',
          translate: 'მსუბუქი გაყინული წვიმა',
        },
        {
          words: 'Funnel Cloud/Tornado',
          translate: 'ძაბრის ღრუბელი , ტორნადო',
        },
        {
          words: 'Hail Showers',
          translate: 'სეტყვიანი წვიმა',
        },
        {
          words: 'Ice',
          translate: 'ყინვა',
        },
        {
          words: 'Lightning Without Thunder',
          translate: 'ელვა ჭექა-ქუხილის გარეშე',
        },
        {
          words: 'Mist',
          translate: 'ნისლი',
        },
        {
          words: 'Precipitation In Vicinity',
          translate: 'ნალექები მიმდებარე ტერიტორიაზე',
        },
        {
          words: 'Rain',
          translate: 'წვიმა',
        },
        {
          words: 'Heavy Rain And Snow',
          translate: 'ძლიერი წვიმა და თოვლი',
        },
        {
          words: 'Light Rain And Snow',
          translate: 'მსუბუქი წვიმა და თოვლი',
        },
        {
          words: 'Rain Showers',
          translate: 'კოკისპირული წვიმა',
        },
        {
          words: 'Heavy Rain',
          translate: 'ძლიერი წვიმა',
        },
        {
          words: 'Light Rain',
          translate: 'მსუბუქი წვიმა',
        },
        {
          words: 'Sky Coverage Decreasing',
          translate: 'ღრუბლოვანი საფარი მცირდება',
        },
        {
          words: 'Sky Coverage Increasing',
          translate: 'ღრუბლოვანი საფარი იზრდება',
        },
        {
          words: 'Sky Unchanged',
          translate: 'ცა უცვლელია',
        },
        {
          words: 'Smoke Or Haze',
          translate: 'კვამლი ან ნისლი',
        },
        {
          words: 'Snow',
          translate: 'თოვლი',
        },
        {
          words: 'Snow And Rain Showers',
          translate: 'ძლიერი თოვლი, წვიმა',
        },
        {
          words: 'Snow Showers',
          translate: 'Ძლიერი თოვლი',
        },
        {
          words: 'Heavy Snow',
          translate: 'Დიდი თოვლი',
        },
        {
          words: 'Light Snow',
          translate: 'მცირე თოვლი',
        },
        {
          words: 'Squalls',
          translate: 'Squalls',
        },
        {
          words: 'Thunderstorm',
          translate: 'ქარიშხალი',
        },
        {
          words: 'Thunderstorm Without Precipitation',
          translate: 'ჭექა-ქუხილი ნალექის გარეშე',
        },
        {
          words: 'Diamond Dust',
          translate: 'მოწმენდილი ცა, მცირე ნალექი',
        },
        {
          words: 'Hail',
          translate: 'სეტყვა',
        },
        {
          words: 'Overcast',
          translate: 'Მოღრუბლულობა',
        },
        {
          words: 'Partially cloudy',
          
          translate: 'Ნაწილობრივ მოღრუბლული',
        },
        {
          words: 'Clear',
          translate: 'მზიანი',
        },
        {
          words: 'warming up',
          translate: 'დათბობა',
        },
        {
          words: 'cooling down',
          translate: 'სიცივე',
        },
        {
          words: 'similar temperatures continuing',
          translate: 'მსგავსი ტემპერატურა გრძელდება',
        },
        {
          words: 'a chance of rain',
          translate: 'წვიმის შესაძლებლობა',
        },
        {
          words: 'a chance of snow',
          translate: 'თოვლის შესაძლებლობა',
        },
        {
          words: 'no rain expected',
          translate: 'წვიმა არ არის მოსალოდნელი',
        },
        {
          words: 'multiple days',
          translate: 'რამდენიმე დღე',
        },
        {
          words: 'a chance of rain throughout the day',
          translate: 'წვიმის შესაძლებლობა მთელი დღის განმავლობაში',
        },
        {
          words: 'rain clearing later',
          translate: 'წვიმა მალე შეწყდება',
        },
        {
          words: 'afternoon rain',
          translate: 'დღის მეორე ნახევარში მოსალოდნელია წვიმა',
        },
        {
          words: 'morning rain',
          translate: 'დილით მოსალოდნელია წვიმა',
        },
        {
          words: 'early morning rain',
          translate: 'დილით ადრე მოსალოდნელია წვიმა',
        },
        {
          words: 'late afternoon rain',
          translate: 'საღამოს შესაძლებელია წვიმა',
        },
        {
          words: 'rain in the morning and afternoon',
          translate: 'წვიმა დილით და შუადღისას',
        },
        {
          words: 'a chance of rain',
          translate: 'წვიმის შესაძლებლობა',
        },
        {
          words: 'rain',
          translate: 'წვიმია',
        },
        {
          words: 'a chance of snow throughout the day',
          translate: 'თოვლის ალბათობა დღის განმავლობაში',
        },
        {
          words: 'snow clearing later',
          translate: 'თოვლი მოგვიანებით მოვა',
        },
        {
          words: 'afternoon snow',
          translate: 'შუადღეს თოვლი',
        },
        {
          words: 'morning snow',
          translate: 'დილით თოვლი',
        },
        {
          words: 'early morning snow',
          translate: 'დილით ადრე თოვლია მოსალოდნელი',
        },
        {
          words: 'late afternoon snow',
          translate: 'საღამოს მოსალოდნელია თოვლი',
        },
        {
          words: 'snow in the morning and afternoon',
          translate: 'მოსალოდნელია დილით და შუადღეს თოვლი',
        },
        {
          words: 'a chance of snow',
          translate: 'მოსალოდნელია თოვლი',
        },
        {
          words: 'snow',
          translate: 'თოვლი',
        },
        {
          words: 'a chance of rain or snow throughout the day',
          translate: 'მოსალოდნელია წვიმა ან თოვლი',
        },
        {
          words: 'rain or snow clearing later',
          translate: 'მოგვიანებით მოსალოდნელია წვიმა ან თოვლი',
        },
        {
          words: 'afternoon rain or snow',
          translate: 'ნაშუადღევს წვიმა ან თოვლი',
        },
        {
          words: 'morning rain or snow',
          translate: 'დილით შესაძლებელია თოვლი ან წვიმა',
        },
        {
          words: 'early morning snow or rain',
          translate: 'დილით ადრე თოვლი ან წვიმა',
        },
        {
          words: 'late afternoon rain or snow',
          translate: 'გვიან ნაშუადღევს წვიმა ან თოვლი',
        },
        {
          words: 'rain or snow in the morning and afternoon',
          translate: 'წვიმა ან თოვლი დილით და შუადღეს',
        },
        {
          words: 'a chance of rain or snow',
          translate: 'წვიმის ან თოვლის შესაძლებლობა',
        },
        {
          words: 'rain or snow',
          translate: 'წვიმა ან თოვლი',
        },
        {
          words: 'clear conditions throughout the day',
          translate: 'მზიანი მთელი დღის განმავლობაში',
        },
        {
          words: 'cloudy skies throughout the day',
          translate: 'მთელი დღე მოღრუბლული',
        },
        {
          words: 'becoming cloudy in the afternoon',
          translate: 'მოღრუბლული შუადღისას',
        },
        {
          words: 'clearing in the afternoon',
          translate: 'მზიანი დღის მეორე ნახევარში',
        },
        {
          words: 'partly cloudy throughout the day',
          translate: 'დღის განმავლობაში ნაწილობრივ მოღრუბლული',
        },
        {
          words: 'strong storms possible',
          translate: 'შესაძლებელია ძლიერი ჭექა-ქუხილი',
        },
        {
          words: 'storms possible',
          translate: 'შესაძლოა ჭექა-ქუხილი',
        },
        {
          words: 'Monday',
          translate: 'ორშაბათი',
        },
        {
          words: 'Tuesday',
          translate: 'სამშაბათი',
        },
        {
          words: 'Wednesday',
          translate: 'ოთხშაბათი',
        },
        {
          words: 'Thursday',
          translate: 'ხუთშაბათი',
        },
        {
          words: 'Friday',
          translate: 'პარაკევი',
        },
        {
          words: 'Saturday',
          translate: 'შაბათი',
        },
        {
          words: 'Sunday',
          translate: 'კვირა',
        },
        {
          words: 'today',
          translate: 'დღეს',
        },
        {
          words: 'tomorrow',
          translate: 'ხვალ',
        },
      ];
      return obwheater
      
}