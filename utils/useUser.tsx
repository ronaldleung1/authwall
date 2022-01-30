import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { auth } from "./firebase";
import {
  User,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/router";

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const handleUser = (rawUser: User | null) => {
    if (rawUser) {
      setUser(rawUser);
      setLoading(false);
    } else {
      setUser(null);
      setLoading(false);
    }
  };
  const signInWithGoogle = async (fn?: Function) => {
    setLoading(true);
    const response = await signInWithPopup(auth, new GoogleAuthProvider());
    handleUser(response.user);
    if (fn) {
      await fn(response);
    }
    router.back();
  };

  const logout = () => {
    return signOut(auth).then(() => handleUser(null));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, handleUser);
    return () => {
      unsubscribe();
    };
  }, []);
  return {
    user,
    logout,
    loading,
    signInWithGoogle,
  };
};
const UserContext = createContext<{
  user: User | null;
  logout: Function;
  loading: boolean;
  signInWithGoogle: Function;
}>({ user: null, logout: () => {}, loading: true, signInWithGoogle: () => {} });
export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const auth = useAuth();
  return <UserContext.Provider value={auth}>{children}</UserContext.Provider>;
};
const useUser = () => useContext(UserContext);
export default useUser;