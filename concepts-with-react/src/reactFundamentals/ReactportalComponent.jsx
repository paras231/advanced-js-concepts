import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.css";
// react portals can be used to create custom modals , tool tips and selec options

const ReactportalComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [showToolTip, setShowToolTip] = useState(false);

  const handleClosTip = () => {
    setShowToolTip(false);
  };
  const handleCloseModal = () => {
    setShowModal();
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.opacity = 0.6;
    }
  }, [showModal]);

  return (
    <>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <button className={styles.show_btn} onClick={() => setShowModal(true)}>
          Show modal
        </button>
        {showModal && <CustomModal closeModal={handleCloseModal} />}
      </div> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
        onMouseEnter={() => setShowToolTip(true)}
        onMouseLeave={handleClosTip}
      >
        <span style={{ cursor: "pointer" }}>Edit Task</span>
        {showToolTip && <CustomtoolTip title={"Edit"} />}
      </div>
    </>
  );
};

export default ReactportalComponent;

function CustomModal({ closeModal }) {
  return createPortal(
    <div className={styles.modal}>
      <p>This is part of the modal</p>
      <button onClick={closeModal}>Close</button>
    </div>,
    document.body
  );
}

function CustomtoolTip({ onCloseTip, title }) {
  return createPortal(
    <div onMouseLeave={onCloseTip} className={styles.tool_tip}>
      {title}
    </div>,
    document.body
  );
}
