import type { NextPage } from 'next';
import Head from 'next/head';
 import useUser from "../utils/useUser";

const Home: NextPage = () => {
  const { user, logout, signInWithGoogle } = useUser();
  return (
    <div>
      <Head>
        <title>Next.js + TailwindCSS + Firebase Starter</title>
        <meta
          name="description"
          content="A Next.js + TailwindCSS + Firebase starter"
        />
      </Head>
      <main
        className={
          "flex flex-col items-center justify-center w-screen h-screen"
        }
      >
        <h1 className={"text-4xl font-bold text-gray-800 mb-2"}>
          Authwall
        </h1>
        {user ? (
          <>
          <p>Signed in as {user.displayName}</p>
            <button 
              className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}
              onClick={() => logout()}
            >
              Sign Out
            </button>
          </>
        ) : (
          <button
            className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}
            onClick={() => signInWithGoogle()}
          >
            Sign in with Google
          </button>
        )}
      </main>
    </div>
  );
};

export default Home;
