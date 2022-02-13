import type { NextPage } from 'next';
import Head from 'next/head';
import useUser from '../utils/useUser';

const Home: NextPage = () => {
  const { user, logout, signInWithGoogle } = useUser();

  return (
    <>
      <Head>
        <title>Sign In | Authwall</title>
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
        <h1 className={'text-4xl font-bold mb-2'}>Authwall</h1>
        {user ? (
          <>
            <p>Signed in as {user.displayName}</p>
            <button
              className={
                'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              }
              onClick={() => logout()}
            >
              Sign Out
            </button>
          </>
        ) : (
          <button
            className={
              'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            }
            onClick={() => signInWithGoogle()}
          >
            Sign in with Google
          </button>
        )}
      </main>
    </>
  );
};

export default Home;
