import React from "react";
import { Link } from "react-router-dom";
import { HeadingTwoStyled } from "../styles/HeadingStyled";

export default function CustomerListItem({ customerData }) {
  return (
    <div>
      <HeadingTwoStyled>
        <Link to={`/customers/${customerData.id}`}>{customerData.name}</Link>
      </HeadingTwoStyled>
      {/* <h2>
        <Link to={`/customers/${customerData.id}`}>{customerData.name}</Link>
      </h2> */}
    </div>
  );
}
