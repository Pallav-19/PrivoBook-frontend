import React from "react";
import Notes from "./Notes";
import Login from "./Login";
function Home() {
  return (
    <div className="container my-3">
      {localStorage.getItem("token") ? <Notes /> : <Login />}
    </div>
  );
}

export default Home;
