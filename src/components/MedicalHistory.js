import React from "react";
import styles from "../styles/MedicalHistory.module.css";
import MainHeader from "../components/MainHeader";

const MedicalHistory = () => {
  return (
    <div className={styles.HeaderOuterDiv}>
      <MainHeader headerName="Medical History" />
    </div>
  );
};

export default MedicalHistory;
