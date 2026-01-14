import Mybtn from "./Mybtn";
import "./MysideMenu.css";
export default function MysideMenu() {
  //rendering list
  const btns = [
    { id: 1, name: "add" },
    { id: 2, name: "del" },
    { id: 3, name: "edit" },
    {
      id: 4,
      name: "",
      c: <img width={"40px"} src="./logo512.png" alt="img"></img>,
    },
    { id: 5, name: "" },
    { id: 6, name: "post" },
    { id: 7, name: "new btn" },
  ];
  const btnUi = btns.map((btn) => {
    return (
      <Mybtn key={btn.id} name={btn.name}>
        {btn.c}
      </Mybtn>
    );
  });
  // console.log(btnUi);
  return <div className={" sideMenu"}>{btnUi}</div>;
}
