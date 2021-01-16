import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../components/NavBar";
import postPutDeleteHandler from "../utilities/postPutDeleteHandler";
import renderInput from "../utilities/renderInput";

export default function CustomerCreatePage() {
  const [formData, setFormData] = useState({});
  const history = useHistory();
  const [isVatValid, setIsVatValid] = useState(false);
  const url = "https://frebi.willandskill.eu/api/v1/customers/";
  const token = localStorage.getItem("WEBB20");
  const doMethod = "POST";
  const myData = formData;
  const customerId = null;

  const submitHandler = e => {
    if (isVatValid === true) {
      postPutDeleteHandler(
        e,
        url,
        token,
        doMethod,
        myData,
        customerId,
        history
      );
    } else {
      alert("Did you fill out the form correctly? Check the VAT Number.");
    }
  };

  function handleOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "vatNr") {
      const regex = /^[SE]{2}\d{10}$/;
      const VATValidation = regex.test(value);
      VATValidation ? setIsVatValid(true) : setIsVatValid(false);
    }
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div>
      <NavBar />
      <h1>Create Customer</h1>
      <form onSubmit={submitHandler}>
        {renderInput("name", "Customer Name", "text", handleOnChange, formData)}
        {renderInput(
          "email",
          "Customer Email",
          "email",
          handleOnChange,
          formData
        )}
        {renderInput(
          "organisationNr",
          "Organization Number",
          "text",
          handleOnChange,
          formData
        )}
        {renderInput(
          "paymentTerm",
          "Payment Term",
          "number",
          handleOnChange,
          formData
        )}
        {renderInput(
          "phoneNumber",
          "Phone Number",
          "tel",
          handleOnChange,
          formData
        )}
        {renderInput(
          "reference",
          "Reference",
          "text",
          handleOnChange,
          formData
        )}
        {renderInput("vatNr", "Vat Number", "text", handleOnChange, formData)}
        {renderInput("website", "Website", "url", handleOnChange, formData)}
        <button type="submit">Create Customer</button>
      </form>
    </div>
  );
}
