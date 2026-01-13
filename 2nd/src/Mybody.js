import "./Mybody.css";
import MypostContainer from "./MypostContainer";
import MysideMenu from "./MysideMenu";
export default function Mybody() {
  return (
    <div className={"bodyContainer"}>
      <MypostContainer />
      <MysideMenu />
    </div>
  );
}
