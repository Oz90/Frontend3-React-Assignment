import React, { useState, useEffect } from "react";
import CustomerListItem from "../components/CustomerListItem";
import NavBar from "../components/NavBar";

export default function CustomerListPage() {
  const [customerList, setCustomerList] = useState([]);
  const [me, setMe] = useState([]);

  function getMe() {
    const url = "https://frebi.willandskill.eu/api/v1/me/";
    const token = localStorage.getItem("WEBB20");
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => setMe(data));
  }

  function getCustomerList() {
    const url = "https://frebi.willandskill.eu/api/v1/customers/";
    const token = localStorage.getItem("WEBB20");
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => setCustomerList(data.results));
  }

  useEffect(() => {
    getCustomerList();
    getMe();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container justify-content-center align-items-center mb-5">
        <h5 className="text-center">
          Welcome back,
          <br />
          {me.firstName} {me.lastName} ({me.email}).
        </h5>
      </div>
      {customerList.map((item, index) => {
        return <CustomerListItem key={item.id} customerData={item} />;
      })}
    </div>
  );
}
