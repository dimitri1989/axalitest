"use client"
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
 
import { usePathname } from 'next/navigation';

export default function Main() {
    const router = usePathname()

    console.log(router );
  return (
    <main>
      <div className="container">
        <h1>mtavari gverdi</h1>
      </div>
    </main>
  );
}
export const getServerSideProps = (async () => {
    // Fetch data from external API
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo = await res.json()
    // Pass data to the page via props
    return { props: { repo } }
  }) 
