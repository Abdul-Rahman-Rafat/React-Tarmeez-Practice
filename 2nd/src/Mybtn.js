import "./Mybtn.css";
// export default function Mybtn(propsORvars) {
//   // props
//   return <button className={"btn"}>{propsORvars.name}</button>;
// }

///////////////////// another way

export default function Mybtn(propsORvars) {
  // props
  const name = propsORvars.name;

  return (
    <button className={"btn"}>
      {name}
      {propsORvars.children}
    </button>
  );
}
