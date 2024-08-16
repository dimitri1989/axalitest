export async function getCurrencyData() {
  var sum = "GEL";
  console.log(sum); // "GEL"
  
  const res = await fetch(`https://v6.exchangerate-api.com/v6/81fc223aed0048b3f30181b4/latest/${sum}`,{
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch valuta data');
  }
  
  
const fl = res.json()

console.log(fl);
  return { fl};
}
export default async function WeatherPage() {
  console.log("Fetching currency data...");
 
  const data = await getCurrencyData();
 
  //console.log('Fetched Data:', data); // ამოიწერეთ სრული მონაცემები

  const { date } = data;
  //console.log('Rates:', date); // Rates აქ უნდა იყოს განსაზღვრული

  return (
    <div>
      <p>Success: {date ? 'true' : 'false'}</p>
      <ul>
        {Object.entries(date || {}).map(([currency, value]) => (
          <li key={currency}>
            {currency}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
