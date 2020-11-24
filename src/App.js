import Index from "./pages/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Index/>
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
