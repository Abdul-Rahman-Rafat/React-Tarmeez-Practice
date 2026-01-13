import Mypost from "./Mypost";
import "./MypostContainer.css";
export default function MypostContainer() {
  return (
    <div className={"postContianer"}>
      <Mypost title="abdo" body="hello people" />
      <Mypost>
        <h1 style={{ background: "green" }}>
          custmize the props should open and close the component
        </h1>
      </Mypost>
      <Mypost title="ahmed" body="hello men" />
      <Mypost />
      <Mypost />
      <Mypost />
    </div>
  );
}
