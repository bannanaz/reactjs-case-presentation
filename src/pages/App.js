import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";

const App = () => {
  return (
    <main>
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/profile" component={Profile} />
      </Router>
    </main>
  );
};

export default App;
