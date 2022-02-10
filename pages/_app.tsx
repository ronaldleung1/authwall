import '../styles/globals.css';
import type { AppProps } from 'next/app';
import useUser, { UserContextProvider } from '../utils/useUser';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { user } = useUser()

  useEffect(() => {
    if (user) {
      console.log("signed in!");
    } else if (user === null) {
      console.log("signed out!");
      router.push("/login");
    }
    console.log(user);
  }, [user]);
  
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default MyApp;
