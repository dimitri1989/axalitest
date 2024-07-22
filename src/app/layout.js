import Head from 'next/head'
import Header from '../components/header';
import Footer from '../components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";



export const metadata = {
  title: "ამინდის პროგნოზი",
  description: "ამინდის პროგნოზი საქართველოში",
  
};
console.log("2");
export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
       
      </Head>
      
      <body>
        <Header />
          {children}
        <Footer />
     
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
        </body>
    </html>
  );
}
