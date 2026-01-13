import Mypost from "./Mypost";
import "./MypostContainer.css";
export default function MypostContainer() {
  return (
    <div className={"postContianer"}>
      <Mypost />
      <Mypost />
      <Mypost />
      <Mypost />
      <Mypost />
    </div>
  );
}
