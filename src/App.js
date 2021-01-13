import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CustomerListPage from "./pages/CustomerListPage";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import CustomerCreatePage from "./pages/CustomerCreatePage";
import CustomerUpdatePage from "./pages/CustomerUpdatePage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/customers/create">
          <CustomerCreatePage />
        </Route>
        <Route path="/customers/:id/edit" component={CustomerUpdatePage} />
        <Route path="/customers/:id" component={CustomerDetailPage} />
        <Route path="/customers">
          <CustomerListPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
