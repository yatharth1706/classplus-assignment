import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Results from "./components/Results";

function App() {
  const [apiResponse, setApiResponse] = useState();

  useEffect(() => {
    callAPI();
  }, []);

  const callAPI = async () => {
    try {
      const response = await fetch(
        "https://run.mocky.io/v3/fefcfbeb-5c12-4722-94ad-b8f92caad1ad"
      ).then((res) => res.json());
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return <Results />;
}

export default App;
