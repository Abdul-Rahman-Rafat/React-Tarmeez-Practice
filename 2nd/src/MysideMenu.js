import Mybtn from "./Mybtn";
import "./MysideMenu.css";
export default function MysideMenu() {
  return (
    <div className={" sideMenu"}>
      <Mybtn name="add" />
      <Mybtn name="del" />
      <Mybtn name="edit" />
      <Mybtn>
        <img src="./logo512.png" alt="img" width={"40px"}></img>
      </Mybtn>

      <Mybtn name="hold" />
      <Mybtn name="post" />
      <Mybtn name="settings" />
      <Mybtn name="login" />
    </div>
  );
}
