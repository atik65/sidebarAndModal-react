import React from "react";
import { useGlobalHook } from "./context";

const Modal = () => {
  const { showModal, closeModalFunc } = useGlobalHook();

  return (
    <>
      <h2>
        <div
          className={` ${showModal ? "showModal modal-main" : "modal-main"}`}
        >
          <div className="modal-center">
            <div className="modal-close-button">
              <div
                className="btn btn-outline-danger close-button"
                onClick={closeModalFunc}
              >
                <i class="fas fa-times    "></i>{" "}
              </div>
            </div>
            <div className="modal-info">
              <h3>This is Modal</h3>
            </div>
          </div>
        </div>
      </h2>
    </>
  );
};

export default Modal;
