import "./App.css";

import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    async function grabData() {
      const response = await axios.get("http://localhost:3000/posts");

      if (response.status === 200) {
        setData(response.data);
      }
    }

    grabData();
  }, []);
  return (
    <>
      <div>
        <h1>App Component</h1>
        <div>{JSON.stringify(data)}</div>
      </div>
    </>
  );
}

export default App;
