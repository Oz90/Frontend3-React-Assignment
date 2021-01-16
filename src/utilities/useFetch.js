// TRASH CODE
// import { useState, useEffect } from "react";

// export const useFetch = (url, token) => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch(url, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`
//         }
//       });
//       const data = await res.json();
//       setData(data);
//       console.log("fetching");
//     };

//     fetchData();
//   }, [url]);

//   return data;
// };
