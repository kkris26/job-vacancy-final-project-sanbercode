import React from "react";

const Modal = ({action}) => {
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Congratulations</h3>
        <p className="py-4">Data Baru Berhasil di Update</p>
        <div className="modal-action">
          <form method="dialog">
            <button onClick={() => action} className="btn">
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
