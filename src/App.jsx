// import React, { useState } from "react";
// import { data } from "./data";
// import "./index.css";
// import Button from "./Button";

// function App() {
//   const [date, setDate] = useState(new Date());

//   setInterval(() => {
//     setDate(new Date());
//   }, 1000);

//   return <h1>Hello React!! Теперішній час - {date.toLocaleString()}</h1>;
// }

// function App2(props) {
//   console.log(props);

//   return (
//     <p>
//       <strong className="str">{props.number}</strong> {props.text}
//     </p>
//   );
// }

// function App3() {
//   return [
//     React.createElement(
//       "header",
//       {
//         key: 1,
//         style: {
//           color: "green",
//           display: "flex",
//           justifyContent: "center",
//         },
//       },
//       "MY program"
//     ),
//     React.createElement(
//       "h2",
//       { key: 2, style: { color: "red" } },
//       "Nakamura beat GM Vladislav Kovalev in a 31-move gradual rundown"
//     ),
//     React.createElement(
//       "p",
//       { key: 3, style: { color: "#666" } },
//       "GM Oleksandr Bortnyk had entered third place in the meantime, but he and Carlsen drew their last game in 14 moves, while Nakamura drew with Nihal and Kovalev defeated Vokhidov. As things shook out, the final result was Carlsen first, Nakamura second, Kovalev third and Bortnyk fourth."
//     ),
//   ];
// }

// const App4 = () => {
//   const [inp, setInp] = useState("");

//   const handleChange = (event) => {};

//   return (
//     <div>
//       <h3>Input - {inp} </h3>
//       <input
//         type="text"
//         value={inp}
//         onChange={(event) => setInp(event.target.value)}
//       />
//       <hr />
//       <Button click={() => alert(inp)}>Send</Button>
//     </div>
//   );
// };

// export { App, App2, App3, App4 };
