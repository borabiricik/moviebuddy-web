import Layout from '../src/layout/Layout'
import Head from "next/head"


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
        <h1>Home</h1>


      </Layout>
    </div>

  )
}
