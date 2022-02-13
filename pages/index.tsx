import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Welcome | Authwall</title>
        <meta
          name="description"
          content="🔒 Protected routes for internal websites"
        />
      </Head>
      <main
        className={
          'flex flex-col items-center justify-center w-screen h-screen text-slate-800'
        }
      >
        <h1 className={'text-4xl font-bold mb-2'}>Protected Page</h1>
        <p>You are currently viewing a protected route.</p>
      </main>
    </>
  );
};

export default Home;
