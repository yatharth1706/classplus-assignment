import { useState, useEffect } from "react";
import Loading from "../images/loading.gif";
import CardGroupRow from "./cards/card-group-row";

function Results() {
  const [apiResponse, setApiResponse] = useState();

  useEffect(() => {
    callAPI();
  }, []);

  useEffect(() => {
    console.log(apiResponse);
  }, [apiResponse]);

  const callAPI = async () => {
    try {
      const response = await fetch(
        "https://run.mocky.io/v3/fefcfbeb-5c12-4722-94ad-b8f92caad1ad"
      ).then((res) => res.json());
      setApiResponse(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {!apiResponse ? (
        <img src={Loading} />
      ) : (
        <div className="w-full p-7 flex flex-col">
          {apiResponse["card_groups"].map((cardgroup_details) => (
            <CardGroupRow cardGroup={cardgroup_details} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Results;
