import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../components/NavBar";
import postPutDeleteHandler from "../utilities/postPutDeleteHandler";

export default function CustomerCreatePage() {
  const [formData, setFormData] = useState({});
  const history = useHistory();
  const url = "https://frebi.willandskill.eu/api/v1/customers/";
  const token = localStorage.getItem("WEBB20");
  const doMethod = "POST";
  const myData = formData;
  const customerId = null;
  const submitHandler = e => {
    postPutDeleteHandler(e, url, token, doMethod, myData, customerId, history);
  };

  function handleOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  }

  function renderInput(name, label, type) {
    return (
      <div>
        <label>{label}</label>
        <input name={name} type={type || "text"} onChange={handleOnChange} />
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <h1>Create Customer</h1>
      <form onSubmit={submitHandler}>
        {renderInput("name", "Customer Name")}
        {renderInput("email", "Customer Email", "email")}
        {renderInput("organisationNr", "Organization Number")}
        {renderInput("paymentTerm", "Payment Term", "number")}
        {renderInput("phoneNumber", "Phone Number", "tel")}
        {renderInput("reference", "Reference")}
        {renderInput("vatNr", "Vat Number")}
        {renderInput("website", "Website", "url")}
        <button type="submit">Create Customer</button>
      </form>
      <code>{JSON.stringify(formData)}</code>
    </div>
  );
}
