import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import useSWR from "swr";
import { Breeds, ChangebreadNumbers } from "./Changebread";

// const MyComponent = () => {
//   const [data, setData] = useState(null);

//   const fetchData = async () => {
//     try {
//       let response = await fetch("https://dog.ceo/api/breeds/image/random");
//       let result = await response.json();

//       setData(result);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []); // Додавання порожнього масиву для того, щоб ефект виконувався тільки при монтуванні компонента

//   console.log(data);

//   return <div>{data && <img src={data.message} alt="Dog" />}</div>;
// };

// const FetchData = () => {
//   const { data, error, isLoading } = useSWR(
//     `https://dog.ceo/api/breeds/image/random`,
//     async (url) => {
//       const response = await fetch(url);

//       if (!response.ok) {
//         throw new Error("Failed to fetch data");
//       }

//       const result = await response.json();
//       return result;
//     },
//     {
//       revalidateOnFocus: false,
//       revalidateOnReconnect: false,
//     }
//   );

//   if (error) return <div>failed to load</div>;
//   if (isLoading) return <div>loading...</div>;

//   // console.log(data);

//   return (
//     <>
//       <div>
//         <img src={data.message} alt="IMG" />
//       </div>
//       <Breeds />
//     </>
//   );
// };

const FetchData = () => {
  const [selectedBreed, setSelectedBreed] = useState(
    "https://dog.ceo/api/breeds/image/random/5"
  );

  const [valueBreed, setValueBreed] = useState("");

  const handleBreedChange = (value) => {
    setSelectedBreed(
      `https://dog.ceo/api/breed/${value.toLowerCase()}/images/random/${breadNumber}`
    );
    setValueBreed(value); // Оновлення значення породи
  };

  const [breadNumber, setBreadNumber] = useState(5);

  const handleBreedChangeNumbers = (value) => {
    console.log(value);
    setBreadNumber(value);
  };

  const { data, error, isLoading } = useSWR(
    `${selectedBreed}`,
    async (url) => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      return result;
    },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  let imgList = Array.isArray(data.message) ? data.message : [data.message];
  return (
    <>
      <div>
        {imgList.map((item, index) => (
          <img
            id="img"
            key={index}
            src={item}
            alt="IMG"
            style={{ width: "200px", height: "200px" }}
          />
        ))}
      </div>
      <Breeds onChange={handleBreedChange} value={valueBreed} />
      <ChangebreadNumbers
        onChange={handleBreedChangeNumbers}
        value={breadNumber}
      />
    </>
  );
};

export default FetchData;
