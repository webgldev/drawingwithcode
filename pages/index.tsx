import type { NextPage } from 'next'
import Head from 'next/head'
import Main from '@pages/main'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Drawing with Code</title>
        <meta name="description" content="Drawing with Code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </>
  )
}

export default Home
