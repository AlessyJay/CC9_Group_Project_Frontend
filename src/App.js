import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/newsFeed/MainPage/Main";
import Comment from "./components/newsFeed/Comment/Comment";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/comment" component={Comment} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
