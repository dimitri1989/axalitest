// app/not-found.js
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1>ინფორმაცია არ მოიძებნა</h1>
        <p>სამწუხაროდ, ინფორმაცია არ მოიძებნა.</p>
        <Link className='text-light' href="/">მთავარ გვერდზე დაბრუნება</Link>
      </div>
    </div>
  );
}
