import React, {
  useContext,
  useState,
  useEffect,
  createContext,
  useCallback,
} from 'react';
import { firebaseapp } from '../Firebase';

interface AuthContextData {
  signed: boolean;
  currentUser: any | null;
  signIn(currentUser: any | null): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any | null>(null);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await firebaseapp
      .auth()
      .signInWithEmailAndPassword(email, password);

    const { user } = response;
    localStorage.setItem('@Adocats:user', JSON.stringify(user));

    setCurrentUser(user);
  }, []);

  const signOut = useCallback(() => {
    firebaseapp.auth().signOut();
    localStorage.removeItem('@Adocats:user');

    setCurrentUser(null);
  }, []);

  useEffect(() => {
    firebaseapp.auth().onAuthStateChanged(user => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(currentUser), currentUser, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
