import { Route, Switch } from "react-router";
import Header from "../components/header";
import Homepage from "../pages/homepage";
import Login from "../pages/login";

const Routers = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      {token && <Header />}
      <Switch>
        <Route exact path="/">
          {token ? <Homepage /> : <Login />}
        </Route>
      </Switch>
    </>
  );
};

export default Routers;
