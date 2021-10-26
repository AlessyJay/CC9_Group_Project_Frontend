import Login from "../components/Login/Login";
import Mainpage from "../pages/Mainpage";
import Register from "../components/Login/Register";
import Resetpassword from "../components/Login/ResetPassword";
import ComfiremResetPassword from "../components/Login/ConfiremResetPassword";
import CommunityPage from "../pages/CommunityPage";
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
        path: "/confirm-reset",
        component: ComfiremResetPassword,
      },
      {
        path: "/community/:name",
        component: CommunityPage,
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
