"use client";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Spinner = () => {
  const { loading } = useSelector((state:RootState) => state.alerts);
  return (
    <>
      {loading && (
        <div className="spinner ">
          <div className="spinnerin "></div>
        </div>
      )}
    </>
  );
};

export default Spinner;
