import Login from "../components/Login/Login";
import Mainpage from "../pages/Mainpage";

const routes = {
  user: {
    route: [
      {
        path: "/",
        component: Mainpage,
      },
    ],
    redirect: "/",
  },

  guest: {
    route: [
      {
        path: "/login",
        component: Login,
        exact: true,
      },
      {
        path: "/community",
        component: Login,
        exact: true,
      },
      {
        path: "/",
        component: Mainpage,
        exact: true,
      },
    ],
    redirect: "/",
  },
};

export default routes;
