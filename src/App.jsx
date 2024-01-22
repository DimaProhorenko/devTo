import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { AppLayout } from "./modules/common/components/";
import {
  Home,
  Login,
  NewPost,
  Signup,
  Signout,
  SinglePost,
  Settings,
  Dashboard,
} from "./pages";
import {
  CREATE_POST,
  DASHBOARD,
  LOGIN,
  POST,
  SETTINGS,
  SIGN_OUT,
  SIGN_UP,
} from "./constants/routes";
import supabase from "./client";
import { setUser } from "./features/user/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const subscription = supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
      const user = session?.user || null;

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
          <Route path={POST}>
            <Route path=":id" element={<SinglePost />} />
          </Route>
          <Route path={SETTINGS} element={<Settings />} />
          <Route path={DASHBOARD} element={<Dashboard />} />
        </Route>

        <Route path={CREATE_POST} element={<NewPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
