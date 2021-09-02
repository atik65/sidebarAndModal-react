import React from "react";
import { useGlobalHook } from "./context";

const Side = () => {
  const { showSide, closeSideFunc } = useGlobalHook();
  return (
    <>
      <h1>
        <div className={`${showSide ? "side-main showSide" : "side-main"}`}>
          <div className="row">
            <div className="col-8">
              <ul>
                <li>Home</li>
                <li>School</li>
                <li>College</li>
                <li>Contact</li>
                <li>Email</li>
              </ul>
            </div>
            <div className="col-4">
              <button className="btn close" onClick={closeSideFunc}>
                <i class="fas fa-times    "></i>
              </button>
            </div>
          </div>
        </div>
      </h1>
    </>
  );
};

export default Side;
