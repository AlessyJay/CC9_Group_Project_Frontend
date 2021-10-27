import Mainpage from "../pages/Mainpage";
import ComfiremResetPassword from "../components/Login/ConfiremResetPassword";
import CommunityPage from "../pages/CommunityPage";
import CreatePost from "../pages/CreatePost";
import UserProfile from "../pages/UserProfile";
import EditCommunitPage from "../pages/EditCommunitPage";
const routes = {
  user: {
    route: [
      {
        path: "/create-post",
        component: CreatePost,
      },
      {
        path: "/profile/:name",
        component: UserProfile,
      },
      {
        path: "/community/:name/:id",
        component: CommunityPage,
        exact: true,
      },
      {
        path: "/community/:name/:id/edit",
        component: EditCommunitPage,
      },
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
        path: "/",
        component: Mainpage,
      },
    ],
    redirect: "/",
  },
};

export default routes;
