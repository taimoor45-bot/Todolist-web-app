import React from "react";
import CustomTask from "./CustomTask";
import SubmitDocument from "./SubmitDocument";
import Submitdetail from "./Submitdetail";
import Customvital from "./Customvital";

const VitalTask = () => {
  return (
    <>
      <div className="flex justify-around mt-30">
        <Customvital />
        <Submitdetail />
      </div>
    </>
  );
};

export default VitalTask;
