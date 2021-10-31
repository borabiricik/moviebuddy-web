import Layout from '../src/layout/Layout'
import Head from "next/head"
import Banner from '../src/Components/Home/Banner/Banner'
import Trending from '../src/Components/Home/Slider/HomeSlider'



export default function Home() {
  return (
    <div>
      <Head>
        <link
          rel="preload"
          href="/fonts/Inter-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Inter-Medium.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Layout>
        <Banner />
        <Trending />

      </Layout>
    </div>

  )
}
