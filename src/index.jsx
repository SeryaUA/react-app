import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import useSWR from "swr";
import "./index.css";
import FetchData from "./FetchData";
import { Changebread, Breeds } from "./Changebread";
// import { App, App2, App3, App4 } from "./App";
import Button from "./Button";
// import { data } from "./data";

const root = ReactDOM.createRoot(document.getElementById("root"));

function NewApp() {
  return <h1>Hello React!!</h1>;
}

root.render(
  <>
    <NewApp />
    <FetchData />
  </>
);
