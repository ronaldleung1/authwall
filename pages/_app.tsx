import '../styles/globals.css';
import type { AppProps } from 'next/app';
import useUser, { UserContextProvider } from '../utils/useUser';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      router.push("/login");  
    } else {
      console.log(user.displayName);
    }
  }, [user]);
  
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default MyApp;
