import { BrowserRouter, Switch, Route } from "react-router-dom";
import PostImg from "./components/Post/PostImg";
import PostText from "./components/Post/PostText";
import Header from "./components/Navbar/Header";
import Login from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {/* <CommunityHeader /> */}
        {/* <div className="px-6 py-4 text-gray-400">
          <div className="border  p-2 rounded-md flex">
            <div className="rounded-full bg-gray-600 overflow-hidden w-10 h-10">
              <img src="" alt="" style={{ filter: "invert(100%)" }} />
            </div>
            <form action="" className="flex-grow  border  ml-4 mr-2 rounded-md">
              <input
                type="text"
                onFocus={e => {
                  e.preventDefault();
                }}
                className=" p-2 px-3 text-sm block w-full rounded-md"
                placeholder="New post"
              />
            </form>
          </div>
        </div> */}

        <Route path="/login" component={Login} />
        <Route path="/5" component={PostImg} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
