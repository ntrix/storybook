import React from "react";
import "./Modal.css";

export default function Modal({ content, onCloseModal }) {
  return (
    <>
      <div className="shadow-overlay" />
      <div className="modal-1">
        <div className="btn btn-close" onClick={onCloseModal}>
          X
        </div>
        <h1>{content.h1}</h1>
        <p>{content.p}</p>
        <button className="btn btn-green" onClick={onCloseModal}>
          Accept
        </button>
        <button className="btn btn-red" onClick={onCloseModal}>
          Decline
        </button>
      </div>
    </>
  );
}
