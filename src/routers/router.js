import { Route, Switch } from "react-router";
import Header from "../components/header";
import Cart from "../pages/cart";
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
        <Route exact path="/detail">
          <Detail />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </>
  );
};

export default Routers;
