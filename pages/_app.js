import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
  <Head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4208857816426904"
     crossorigin="anonymous"></script>
       <link rel="icon" href="/o3.png" />

  </Head>
  <Navbar />
  <Component {...pageProps} />
  <Footer/>
  </>
}
