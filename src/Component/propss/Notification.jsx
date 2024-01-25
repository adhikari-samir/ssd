import React from "react";
import "./props.css";
import { MdCheckCircle } from "react-icons/md";

const Notification = ({ title, paragraph, onclick }) => {
  const handleDismiss = () => {
    // Call the onclick handler to handle the dismissal
    if (onclick) {
      onclick();
    }
  };

  return (
    <>
      <div className="ennnd" onClick={handleDismiss}>
        <div className="box_shadow">
          <div className="iconn">
            <i>
              <MdCheckCircle size={30} color="rgb(0,255,98)" />
            </i>
          </div>
          <div className="txt">
            <p className="heading">{title}</p>
            <p className="paragraph">{paragraph}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
