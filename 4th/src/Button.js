// import { useState } from "react";

// export default function Button() {
//   console.log(useState()); //list with value and function
//   console.log(useState("Abdo")); // list with deafault value and function
//   const state = useState("Abdo"); // output = Abdo
//   const val = state[0]; // output = Abdo
//   const setVal = state[1]; // output = function
//   //   console.log(val);
//   //   console.log(setVal);
//   function changeName() {
//     setVal("Ahmed");
//   }

//   return (
//     <>
//       <button onClick={changeName}>Click</button>
//       <h1>{val}</h1>
//     </>
//   );
// }

///////////// easier way

import { useState } from "react";
export default function Button() {
  const [name, setName] = useState("Abdo");
  function changeName() {
    name === "Abdo" ? setName("Ahmed") : setName("Abdo");
  }
  return (
    <>
      <button onClick={changeName}>Click</button>
      <h1>{name}</h1>
    </>
  );
}
