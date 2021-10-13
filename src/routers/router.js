import { Route, Switch, useLocation } from "react-router";
import Footer from "../components/footer";
import Header from "../components/header";
import Homepage from "../pages/homepage";
import Login from "../pages/login";

const Routers = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Header />
      )}
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Footer />
      )}
    </>
  );
};

export default Routers;
