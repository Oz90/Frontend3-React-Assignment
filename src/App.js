import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/customers">Customers</Link>
        </li>
        <li>
          <Link to="/customers/create">Create Customer</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/customers/create"></Route>
        <Route path="/customers/:id/edit"></Route>
        <Route path="/customers/:id"></Route>
        <Route path="/customers"></Route>
      </Switch>
    </div>
  );
}

export default App;
