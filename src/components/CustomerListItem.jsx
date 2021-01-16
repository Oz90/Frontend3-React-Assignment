import React from "react";
import { Link, useHistory } from "react-router-dom";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { IconContext } from "react-icons";

export default function CustomerListItem({ customerData }) {
  const url = `https://frebi.willandskill.eu/api/v1/customers/${customerData.id}/`;
  const doMethod = "DELETE";
  const token = localStorage.getItem("WEBB20");
  const history = useHistory();

  function deleteCustomer() {
    fetch(url, {
      method: `${doMethod}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }).then(() => history.go(0));
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">VAT Number</th>
          <th scope="col">Website</th>
          <th scope="col">EDIT/DELETE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{customerData.id}</th>
          <td>
            <Link to={`/customers/${customerData.id}`}>
              {customerData.name}
            </Link>
          </td>
          <td>{customerData.vatNr}</td>
          <td>{customerData.website}</td>
          <td>
            <button>
              <Link to={`/customers/${customerData.id}/edit`}>
                <AiFillEdit size={25} />
              </Link>
            </button>
            /
            <button onClick={deleteCustomer}>
              <IconContext.Provider value={{ color: "red" }}>
                <AiFillDelete size={25} />
              </IconContext.Provider>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
