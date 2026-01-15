import { useState } from "react";

export default function Input() {
  const [name, setName] = useState("");
  function inputValueChange(e) {
    setName(e.target.value);
  }
  return (
    <div>
      <label> Name </label>
      <input
        onChange={inputValueChange}
        type="text"
        placeholder="Enter your name"
      />
      <h1>{name}</h1>
    </div>
  );
}
