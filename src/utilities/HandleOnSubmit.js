export default function HandleOnSubmit(
  e,
  url,
  token,
  formData,
  customerId,
  history
) {
  e.preventDefault();

  const fetchData = async () => {
    const res = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
    const data = await res.json();
    history.push(`/customers/${customerId}`);
  };

  fetchData();
}
