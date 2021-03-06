import Mainpage from "../pages/Mainpage";
import ComfiremResetPassword from "../components/Login/ConfiremResetPassword";
import CommunityPage from "../pages/CommunityPage";
import CreatePost from "../pages/CreatePost";
import UserProfile from "../pages/UserProfile";
import EditCommunitPage from "../pages/EditCommunitPage";
import UserEditPage from "../pages/UserEditPage";
import UserProfilePost from "../pages/UserProfilePost";
import UserProfileComments from "../pages/UserProfileComments";
import UserProfileSave from "../pages/UserProfileSave";
import UserProfileHidden from "../pages/UserProfileHidden";
import OtherProfilePage from "../pages/OtherProfilePage";
import PostPage from "../pages/PostPage";
import MainpageGuest from "../pages/MainpageGuest";

const routes = {
  user: {
    route: [
      {
        path: "/create-post",
        component: CreatePost,
      },
      {
        path: "/posts/:communityHostId/:id",
        component: PostPage,
      },
      {
        path: "/user/:id",
        component: OtherProfilePage,
      },
      {
        path: "/profile/:id/edit",
        component: UserEditPage,
      },
      {
        path: "/profile/:id/posts",
        component: UserProfilePost,
        exact: true,
      },
      {
        path: "/profile/:id/comments",
        component: UserProfileComments,
        exact: true,
      },
      {
        path: "/profile/:id/save",
        component: UserProfileSave,
        exact: true,
      },
      {
        path: "/profile/:id/hidden",
        component: UserProfileHidden,
        exact: true,
      },
      {
        path: "/profile/:id",
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
        path: "/user/:id",
        component: OtherProfilePage,
      },
      {
        path: "/community/:name/:id",
        component: CommunityPage,
        exact: true,
      },
      {
        path: "/posts/:communityHostId/:id",
        component: PostPage,
      },
      {
        path: "/",
        component: MainpageGuest,
      },
    ],
    redirect: "/",
  },
};

export default routes;
