import React, { useContext } from "react";
import AlertContext from "../../Context/Alerts/AlertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className={`alert alert-${alert.icon}`}>
        <i className="fas fa-info-circle"></i> Please Enter something
      </div>
    )
  );
};
export default Alert;
