import "./Mypost.css";
export default function Mypost({ title = "title", body = "body", children }) {
  //object destructuring another way for the props
  return (
    <div className={"post"}>
      <h2>This is post {title}</h2>
      <hr></hr>
      <p>
        this the post {body} , {children}
      </p>
    </div>
  );
}
