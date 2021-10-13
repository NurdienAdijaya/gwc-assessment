import { Route, Switch, useLocation } from "react-router";
import Footer from "../components/footer";
import Header from "../components/header";
import Homepage from "../pages/homepage";

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
      </Switch>
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Footer />
      )}
    </>
  );
};

export default Routers;
