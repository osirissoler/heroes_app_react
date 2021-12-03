import {useEffect, useReducer} from "react";
import { AuthCotext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";
import { AppRouter } from "./routers/AppRouter";

const init = () => {
  return  JSON.parse(localStorage.getItem('user')) || {logged: false}

  
};

export const HeroesApp = () => {

  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
      if(!user) return;
      console.log('pupu')
      localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  return (

    <AuthCotext.Provider value={{
        user, 
        dispatch
    }}>
      <AppRouter />
    </AuthCotext.Provider>
  );
};
