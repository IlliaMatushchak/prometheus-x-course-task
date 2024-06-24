import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function Layout({ userNameState, userLoggedState }) {

  const navigate = useNavigate();

  useEffect(() => {
    if (!userLoggedState.userIsLoggedIn) {
      // if (window.location.pathname !== "/") {
      // window.location.assign("/");
      navigate("/");
      // console.log(1);
      // }
    }
  }, [userLoggedState.userIsLoggedIn, navigate]);

  return (
    <>
      <Header {...userNameState} {...userLoggedState} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
