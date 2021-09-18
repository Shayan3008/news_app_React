import NavBar from "./components/NavBar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <NavBar name="newsApp" />
        <Switch>
          <Route path="/"> <News  key= "home" category="general" /></Route>
          <Route path="/general"> <News key= "general"  category="general" /></Route>
          <Route path="/health"> <News key= "health" category="health" /></Route>
          <Route path="/science"> <News key= "science"  category="science" /></Route>
          <Route path="/sports"> <News key= "sports"  category="sports" /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
