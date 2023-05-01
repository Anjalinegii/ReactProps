import React from "react";
import ReactDOM from "react-dom";
function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="imgfromgoogle" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}
ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Anjali"
      tel="1234567890"
      email="anjali.com"
      img="https://tse1.mm.bing.net/th?id=OIP.96IGOaKpG3kZZsXfn3EWGwHaEK&pid=Api&P=0"
    />
    <Card
      name="Vanshika"
      tel="1234567890"
      email="anjali.com"
      img="https://tse3.explicit.bing.net/th?id=OIP.4d7Emr_d4fJnEE6zK7pj_wHaFK&pid=Api&P=0"
    />
  </div>,
  document.getElementById("root")
);
