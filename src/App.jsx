import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { AppLayout } from "./modules/common/components/";
import { Home, Login, NewPost, Signup, Signout, SinglePost } from "./pages";
import {
  CREATE_POST,
  LOGIN,
  POST,
  SIGN_OUT,
  SIGN_UP,
} from "./constants/routes";
import supabase from "./client";
import { setUser } from "./features/user/userSlice";

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const getUser = async () => {
  //     const res = await supabase
  //       .from("profiles")
  //       .select("id, first_name, last_name, username")
  //       .eq("id", "bd57cc48-8a7a-4b8e-b19b-c675265a7e28");
  //     console.log(res);
  //   };
  //   getUser();
  // }, []);

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
          <Route path={POST}>
            <Route path=":id" element={<SinglePost />} />
          </Route>
        </Route>

        <Route path={CREATE_POST} element={<NewPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
