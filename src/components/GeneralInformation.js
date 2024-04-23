import React from "react";
import styles from "../styles/GeneralInformation.module.css";
import MainHeader from "./MainHeader";

const GeneralInformation = () => {
  return (
    <div className={styles.HeaderOuterDiv}>
      <MainHeader headerName="General Information" />
    </div>
  );
};

export default GeneralInformation;
