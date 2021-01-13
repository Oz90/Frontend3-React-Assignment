export default function postPutDeleteHandler(
  e,
  url,
  token,
  doMethod,
  myData,
  customerId,
  history
) {
  e.preventDefault();

  if (doMethod === "PUT") {
    fetch(url, {
      method: `${doMethod}`,
      body: JSON.stringify(myData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => history.push(`/customers/${customerId}`));
  } else if (doMethod === "DELETE") {
    fetch(url, {
      method: `${doMethod}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }).then(() => history.push("/customers"));
  } else if (doMethod === "POST") {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(myData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        history.push("/customers");
      });
  }
}
