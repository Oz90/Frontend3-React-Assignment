import React, { useState, useEffect, useContext } from "react";
import CustomerListItem from "../components/CustomerListItem";
import NavBar from "../components/NavBar";
import { UserContext } from "../context/UserContext";
import { useFetch } from "../utilities/useFetch";
import { HeadingOneStyled, HeadingTwoStyled } from "../styles/HeadingStyled";

export default function CustomerListPage() {
  //const [customerList, setCustomerList] = useState([]);
  // const [me, setMe] = useState([]);
  const { me, setMe } = useContext(UserContext);
  const { customerList, setCustomerList } = useContext(UserContext);

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
  console.log(customerList);

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
        <div className="text-center">
          <HeadingOneStyled> Welcome back,</HeadingOneStyled>
          <br />
          <HeadingTwoStyled>
            {me.firstName} {me.lastName} ({me.email}).
          </HeadingTwoStyled>
        </div>
      </div>
      {customerList.map((item, index) => {
        return <CustomerListItem key={item.id} customerData={item} />;
      })}
    </div>
  );
}
