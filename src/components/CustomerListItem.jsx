import React from "react";
import { Link, useHistory } from "react-router-dom";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
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
    <tr>
      <th scope="row" className="text-center">
        {customerData.id}
      </th>
      <td className="text-center">
        <Link to={`/customers/${customerData.id}`}>{customerData.name}</Link>
      </td>
      <td className="text-center">{customerData.vatNr}</td>
      <td className="text-center">{customerData.website}</td>
      <td className="text-center">
        <button>
          <Link to={`/customers/${customerData.id}/edit`}>
            <AiOutlineEdit size={25} />
          </Link>
        </button>
        <button onClick={deleteCustomer}>
          <IconContext.Provider value={{ color: "red" }}>
            <AiOutlineDelete size={25} />
          </IconContext.Provider>
        </button>
      </td>
    </tr>
  );
}
