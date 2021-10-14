import { Route, Switch } from "react-router";
import Header from "../components/header";
import Detail from "../pages/detail";
import Homepage from "../pages/homepage";
import Login from "../pages/login";

const Routers = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <Switch>
        <Route exact path="/">
          {token && <Header />}

          {token ? <Homepage /> : <Login />}
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/detail">
          <Detail />
        </Route>
      </Switch>
    </>
  );
};

export default Routers;
