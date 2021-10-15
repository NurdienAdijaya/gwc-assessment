import { Route, Switch } from "react-router";
import Sidebar from "../components/sidebar";
import Cart from "../pages/cart";
import Detail from "../pages/detail";
import Homepage from "../pages/homepage";
import Login from "../pages/login";
import Profile from "../pages/profile";

const Routers = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <Switch>
        <Route exact path="/">
          {token ? <Homepage /> : <Login />}
        </Route>
        <Route exact path="/detail">
          <Detail />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/sidebar">
          <Sidebar />
        </Route>
      </Switch>
    </>
  );
};

export default Routers;
