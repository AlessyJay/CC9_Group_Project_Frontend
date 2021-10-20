import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import PostImg from './components/Post/PostImg';
import PostText from './components/Post/PostText';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/5" component={PostImg} />
        <Route path="/" component={PostText} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
