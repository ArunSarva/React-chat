import React from "react";
import "./activity-indicator.css";
import LoaderIcon from "../../assets/images/Infinity-2s-230px.svg";

const ActivityIndicator = ()=> {
  return (
    <div
      data-testid="mainContainer"
      className="flex"
      style={{
        position: "fixed",
        backgroundColor: "#81a3d7",
      }}
     
    >
      <div className="loader">
        <img src={LoaderIcon} alt="load icon" width="50px" height="50px" />
        <label  data-testid="loading"  className="loaderText">Please wait..</label>
      </div>
    </div>
  );
}
export default ActivityIndicator;
