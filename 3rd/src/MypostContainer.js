// import Mypost from "./Mypost";
// import "./MypostContainer.css";
// export default function MypostContainer() {
//   return (
//     <div className={"postContianer"}>
//       <Mypost title="abdo" body="hello people" />
//       <Mypost>
//         <h1 style={{ background: "green" }}>
//           custmize the props should open and close the component
//         </h1>
//       </Mypost>
//       <Mypost title="ahmed" body="hello men" />
//       <Mypost />
//       <Mypost />
//       <Mypost />
//     </div>
//   );
// }

// list rendrening way
import Mypost from "./Mypost";
import "./MypostContainer.css";
export default function MypostContainer() {
  const posts = [
    { uid: 1, title: "abdo", body: "hello people1", child: "" },
    {
      uid: 2,
      title: "ahmad",
      body: "hello people2",
      child: (
        <h1 style={{ background: "green" }}>
          custmize the props should open and close the component
        </h1>
      ),
    },
    { uid: 3, title: "mo", body: "hello people3", child: "" },
    { uid: 4, title: "rafat", body: "hello people4", child: "" },
  ];

  const postsUi = posts.map((post) => {
    return (
      <Mypost key={post.uid} title={post.title} body={post.body}>
        {post.child}
      </Mypost>
    );
  });

  return <div className={"postContianer"}>{postsUi}</div>;
}
