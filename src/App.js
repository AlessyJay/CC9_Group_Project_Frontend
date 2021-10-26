import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Navbar/Header";
import { useContext } from "react";
import { UserContext } from "./context/userContext";
import routes from "./config/route";
import CommunityPage from "./pages/CommunityPage";

function App() {
  const { user } = useContext(UserContext);
  const role = user ? "user" : "guest";

  return (
    <>
      <Header />
      <Switch>
        {/* {routes[role].route.map(item => (
          <Route key={item.path} exact={item.exact} path={item.path} component={item.component} />
        ))}
        <Redirect to={routes[role].redirect} /> */}
        <CommunityPage />
      </Switch>
    </>
  );
}

export default App;
