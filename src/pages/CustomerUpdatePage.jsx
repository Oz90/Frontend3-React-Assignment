import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function CustomerUpdatePage(props) {
    const customerId = props.match.params.id;
    const [formData, setFormData] = useState({});
    const history = useHistory();

    function getCustomerItem() {
        const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`;
        const token = localStorage.getItem("WEBB20");
        fetch(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setFormData(data));
    }

    useEffect(() => {
        getCustomerItem();
    }, []);

    function handleOnSubmit(e) {
        e.preventDefault();
        const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`;
        const token = localStorage.getItem("WEBB20");
        fetch(url, {
            method: "PUT",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => history.push(`/customers/${customerId}`));
    }

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
            <h1>Update Customer</h1>
            <form onSubmit={handleOnSubmit}>
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
