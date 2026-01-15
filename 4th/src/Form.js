// import "./Form.css";
// import { useState } from "react";
// export default function Form() {
//   const [NameInput, setNameInput] = useState("");
//   const [EmailInput, setEmailInput] = useState("");

//   function nameChange(e) {
//     setNameInput(e.target.value);
//   }
//   function emailChange(e) {
//     setEmailInput(e.target.value);
//   }

//   return (
//     <>
//       <h1>Form</h1>
//       <form>
//         <input onChange={nameChange} type="text" placeholder="Name" />
//         <input onChange={emailChange} type="email" placeholder="Email" />
//         <input type="password" placeholder="Password" />
//         <input type="submit" value="Submit" />
//       </form>
//       <h1>Name: {NameInput}</h1>
//       <h1>Email: {EmailInput}</h1>
//     </>
//   );
// }

import "./Form.css";
import { useState } from "react";
export default function Form() {
  //   const [NameInput, setNameInput] = useState("");
  //   const [EmailInput, setEmailInput] = useState("");

  const [inputs, setInputs] = useState({
    name: "abdo",
    email: "abdo@abdo.com",
    textarea: "123",
    checkbox: false,
    year: "",
    role: "",
  });

  function nameChange(e) {
    setInputs({ ...inputs, name: e.target.value });
  }
  // other way in the element itself line 54
  //   function emailChange(e) {
  //     setInputs({ ...inputs, email: e.target.value });
  //   }
  return (
    <>
      <h1>Form</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(inputs);
        }}
      >
        <input
          value={inputs.name}
          onChange={nameChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={inputs.email}
          onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          type="email"
          placeholder="Email"
        />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Submit" />
      </form>
      <h1>Name: {inputs.name}</h1>
      <h1>Email: {inputs.email}</h1>
      <hr></hr>
      <label>text area</label>
      <textarea
        onChange={(e) => {
          setInputs({ ...inputs, textarea: e.target.value });
        }}
        cols="30"
        rows="10"
      ></textarea>
      <hr></hr>
      <label>are u happy</label>
      <input
        type="checkbox"
        checked={inputs.checkbox}
        onChange={(e) => {
          setInputs({ ...inputs, checkbox: e.target.checked });
        }}
      />
      <hr></hr>

      <label>Teacher</label>
      <input
        value="teacher"
        type="radio"
        onChange={(e) => {
          setInputs({ ...inputs, role: e.target.value });
        }}
        checked={inputs.role === "teacher"}
      />
      <label>Student</label>
      <input
        value="student"
        type="radio"
        onChange={(e) => {
          setInputs({ ...inputs, role: e.target.value });
        }}
        checked={inputs.role === "student"}
      />

      {inputs.role === "student" ? (
        <>
          <hr></hr>
          <label>Year</label>
          <select
            onChange={(e) => {
              setInputs({ ...inputs, year: e.target.value });
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </>
      ) : (
        ""
      )}
    </>
  );
}
