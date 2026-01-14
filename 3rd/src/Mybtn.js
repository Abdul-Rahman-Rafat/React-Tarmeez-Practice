import "./Mybtn.css";
// export default function Mybtn(propsORvars) {
//   // props
//   return <button className={"btn"}>{propsORvars.name}</button>;
// }

///////////////////// another way

export default function Mybtn(propsORvars) {
  // props
  const name = propsORvars.name;
  const child = propsORvars.children;
  //conditional rendering
  if (name || child) {
    return (
      <button className={"btn"}>
        {name}
        {child}
      </button>
    );
  } else {
    return null;
  }
}
