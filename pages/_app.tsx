import '../styles/globals.css';
import type { AppProps } from 'next/app';
import useUser, { UserContextProvider } from '../utils/useUser';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { user, loading } = useUser();

  useEffect(() => {
    console.log(user);
    console.log(loading);
    if (loading) return;
    if (!user) {
      router.push('/login');
    } else {
      console.log(user.displayName);
    }
    /*if (!user) {
      router.push('/login');
    } else {
      console.log(user.displayName);
    }*/
  }, [user, loading]);

  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default MyApp;
