import React, { useEffect, useContext } from "react";
import CustomerListItem from "../components/CustomerListItem";
import NavBar from "../components/NavBar";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { HeadingOneStyled, HeadingTwoStyled } from "../styles/HeadingStyled";

export default function CustomerListPage() {
  //const [customerList, setCustomerList] = useState([]);
  // const [me, setMe] = useState([]);
  const { me, setMe } = useContext(UserContext);
  const { customerList, setCustomerList } = useContext(UserContext);
  const history = useHistory();

  function myInfo() {
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
    myInfo();
  }, []);

  function logOutHandler() {
    localStorage.removeItem("WEBB20");
    history.push("/");
  }

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
      <div className="container">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                #
              </th>
              <th scope="col" className="text-center">
                Name
              </th>
              <th scope="col" className="text-center">
                VAT Number
              </th>
              <th scope="col" className="text-center">
                Website
              </th>
              <th scope="col" className="text-center">
                EDIT / DELETE
              </th>
            </tr>
          </thead>
          <tbody>
            {customerList.map((item, index) => {
              return <CustomerListItem key={item.id} customerData={item} />;
            })}
          </tbody>
        </table>
      </div>
      <div className="container">
        <button className="btn btn-primary" onClick={logOutHandler}>
          Log Out
        </button>
      </div>
    </div>
  );
}
