import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CustomerListPage from "./pages/CustomerListPage";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import CustomerCreatePage from "./pages/CustomerCreatePage";
import CustomerUpdatePage from "./pages/CustomerUpdatePage";
import { UserContext } from "./context/UserContext";

function App() {
  const [me, setMe] = useState([]);
  const [customerList, setCustomerList] = useState([]);

  return (
    <div>
      <UserContext.Provider
        value={{ me, setMe, customerList, setCustomerList }}
      >
        <Switch>
          <Route path="/customers/create">
            <CustomerCreatePage />
          </Route>
          <Route path="/customers/:id/edit" component={CustomerUpdatePage} />
          <Route path="/customers/:id" component={CustomerDetailPage} />
          <Route path="/customers">
            <CustomerListPage />
          </Route>
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
      </UserContext.Provider>
    </div>
  );
}

export default App;
