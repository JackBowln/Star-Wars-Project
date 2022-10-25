import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../shared/components/Header/index';
import Table from '../shared/components/Table/index';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Star Wars</title>
        <meta name="description" content="Star Wars Website" />
        <link rel="icon" href="/assets/favicon.png" />
      </Head>
      <Header/>
      <Table />
    </div>
  )
}

export default Home
