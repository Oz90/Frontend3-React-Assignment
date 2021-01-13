import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useFetch } from "../utilities/useFetch";
import postPutDeleteHandler from "../utilities/postPutDeleteHandler";

export default function CustomerUpdatePage(props) {
  const customerId = props.match.params.id;
  const [formData, setFormData] = useState({});
  const history = useHistory();
  const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`;
  const token = localStorage.getItem("WEBB20");
  const doMethod = "PUT";
  const myData = formData;
  const getCustomerItem = useFetch(url, token);
  const submitHandler = e => {
    postPutDeleteHandler(
      e,
      url,
      token,
      doMethod,
      myData,
      customerId,
      history
    );
  };

  function renderInput(name, label, type) {
    return (
      <div>
        <label>{label}</label>
        <input
          name={name}
          value={formData[name] || ""}
          type={type || "text"}
          onChange={handleOnChange}
        />
      </div>
    );
  }

  function handleOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div>
      <NavBar />
      <h1>Update Customer</h1>
      <form onSubmit={submitHandler}>
        {renderInput("name", "Customer Name")}
        {renderInput("email", "Customer Email", "email")}
        {renderInput("organisationNr", "Organization Number")}
        {renderInput("paymentTerm", "Payment Term", "number")}
        {renderInput("phoneNumber", "Phone Number", "tel")}
        {renderInput("reference", "Reference")}
        {renderInput("vatNr", "Vat Number")}
        {renderInput("website", "Website", "url")}
        <button type="submit">Update Customer</button>
      </form>
    </div>
  );
}
