import React from "react";

import styles from "./InputControl.module.css";

function InputControl({ label, ...props }) {
  return (
    <div className={styles.container}>
      {label && <label>{label}</label>}
      <input className="input-control" type="text" {...props} />
    </div>
  );
}

export default InputControl;
