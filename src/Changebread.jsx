import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const Breeds = ({ onChange, value }) => {
  const [data, setData] = useState([]);

  const fetchList = async () => {
    try {
      const listFetch = await fetch("https://dog.ceo/api/breeds/list/all");
      const listJson = await listFetch.json();
      const list = Object.keys(listJson.message);
      const list1 = list.map(
        (item) => item.charAt(0).toUpperCase() + item.slice(1)
      );
      setData(list1);
    } catch (error) {
      console.error("Помилка при отриманні даних:", error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const Changebread = (event) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
    console.log(selectedValue);
  };

  return (
    <>
      <label htmlFor="breadSelect">Виберіть породу</label>
      <select id="breadSelect" value={value} onChange={Changebread}>
        {data.map((itemOption, index) => (
          <option key={index} value={itemOption}>
            {itemOption}
          </option>
        ))}
      </select>
    </>
  );
};

const ChangebreadNumbers = ({ onChange, value }) => {
  const BreadNumbers = (event) => {
    const selectedValue = event.target.value;
    console.log(selectedValue);
    onChange(selectedValue);
  };

  return (
    <>
      <span> Кількість: </span>
      <input
        type="number"
        id="breadNumbers"
        onChange={BreadNumbers}
        defaultValue={value}
        min="1"
        max="15"
      ></input>
    </>
  );
};

export { Breeds, ChangebreadNumbers };
