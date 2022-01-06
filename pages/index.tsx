import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next Starter</title>
        <meta name="description" content="Another Next Starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="mb-4 text-4xl text-center text-gray-800 font-bold font-sans">
          Tailwind CSS Boilerplate
        </h1>
        <p className="text-sm text-center text-gray-600 font-sans">
          Get started by editing index.html
        </p>
      </main>
    </div>
  );
};

export default Home;
