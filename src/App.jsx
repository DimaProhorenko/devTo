import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./modules/common/components/";
import { Home, Login, Signup } from "./pages";
import { LOGIN, SIGN_OUT, SIGN_UP } from "./constants/routes";
import Signout from "./pages/Signout";
import { useEffect } from "react";
import supabase from "./client";
import { useDispatch } from "react-redux";
import { setUser } from "./features/user/userSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const subscription = supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
      const user = session?.user || {};
      dispatch(setUser(user));
    });

    return () => {
      subscription.data.subscription.unsubscribe();
    };
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path={LOGIN} element={<Login />} />
          <Route path={SIGN_UP} element={<Signup />} />
          <Route path={SIGN_OUT} element={<Signout />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
