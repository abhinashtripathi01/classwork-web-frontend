import React, { useEffect } from "react";
import { testApi } from "../../apis/Api";

const Homepage = () => {
  //print hello after page load, Automatic
  useEffect(() => {
    console.log("Hello!!");
    //calling test API
    testApi().then((res) => {
      console.log(res);
    });
  });
  return (
    <div>
      <h1>Its Homepage</h1>
    </div>
  );
};

//exporitng
export default Homepage;