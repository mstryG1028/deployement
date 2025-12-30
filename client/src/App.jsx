import { React, useState, useEffect } from "react";

const App = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    // jab hum iska use kar rhe the without defigning proxy
    //  it gives cors err proxy is defined in vite.config
    // but it only works in dev not in production level
    // fetch("http://localhost:4000/api/message")
    // thts why we use this
    // fetch("/api/message")
    fetch("/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <div>
      <h1> frontEnd</h1>
      <p>message:{message}</p>
    </div>
  );
};

export default App;
