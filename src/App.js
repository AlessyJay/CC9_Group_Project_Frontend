import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PostImg from './components/Post/PostImg';
import PostText from './components/Post/PostText';
import Header from "./components/Header";
import Login from "./components/Login";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Login />
      <Switch>
        <Route path="/5" component={PostImg} />
        <Route path="/" component={PostText} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
