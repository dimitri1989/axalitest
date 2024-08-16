import { NextResponse } from 'next/server';

export async function GET(request) {
  const sum = request.headers.get('X-Currency-Sum');
  console.log(sum,"ტოუტიდან"); // უნდა გამოჩნდეს GEL

  const url = `https://v6.exchangerate-api.com/v6/81fc223aed0048b3f30181b4/latest/${sum}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Failed to fetch exchange rates');
    }
    const data = await res.json();
    console.log('External API Response:', data); // ამოიწერეთ პასუხი

    if (data.rates) {
      return NextResponse.json({ success: true, rates: data.rates });
    } else {
      return NextResponse.json({ success: false, message: 'No rates found' });
    }
  } catch (error) {
    console.error('Error fetching external data:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch exchange rates' });
  }
}
