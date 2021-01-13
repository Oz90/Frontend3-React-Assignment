import React from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../components/NavBar";
import postPutDeleteHandler from "../utilities/postPutDeleteHandler";
import CustomerItem from "../components/CustomerItem";

export default function CustomerDetailPage(props) {
  const customerId = props.match.params.id;
  const history = useHistory();
  const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`;
  const token = localStorage.getItem("WEBB20");
  const doMethod = "DELETE";
  const myData = null;
  const deleteCustomer = e => {
    postPutDeleteHandler(e, url, token, doMethod, myData, customerId, history);
  };

  return (
    <div>
      <NavBar />
      <h1>Customer Detail Page</h1>
      <CustomerItem props={props} deleteCustomer={deleteCustomer} />
    </div>
  );
}
