import "./App.css";
import Navbar from "./components/Navbar";

import { useState, useEffect } from "react";

function App() {
  const [data, setdata] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setdata(json));
  });
  return (
    <div className="App">
      <Navbar />
      <div className="main">

        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">UserID</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((d) => (
              <tr>
                <th scope="row">{d.id}</th>
                <td>{d.userId}</td>
                <td>{d.title}</td>
                <td>{d.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
