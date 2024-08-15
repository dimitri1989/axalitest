// app/not-found.js
import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>სამწუხაროდ, ამ გვერდი არ არსებობს.</p>
      <Link href="/">მთავარ გვერდზე დაბრუნება</Link>
    </div>
  );
}
