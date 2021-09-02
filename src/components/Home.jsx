import React from "react";
import { useGlobalHook } from "./context";

const Home = () => {
  const { showSideFunc, showModalFunc } = useGlobalHook();
  return (
    <>
      <div className="main">
        <div className="row">
          <div className="burger" onClick={showSideFunc}>
            <i class="fas fa-bars    "></i>
          </div>

          <div className="modal-button">
            <button
              className="btn btn-outline-primary "
              onClick={showModalFunc}
            >
              Modal Open
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
