export function getCityNames(name) {
    const cityMap = {
      '48.856614,-2.352221': 'გორი',
      '41.4525,-45.3761': 'დავით-გარეჯი',
      '42.702672,-43.676905': 'შოვი',
      '41.693909,-44.693663': 'წყნეთი',
      '42.141614,-41.674803': 'ფოთი',
      '42.585344,-43.442729': 'ონი'
    };
  
    // ქალაქის სახელი პატარა რეგისტრში გადაყვანა და სვეტების დექოდირება
    const normalizedCityName = name.toLowerCase();
  
    return cityMap[normalizedCityName] || normalizedCityName;
  }