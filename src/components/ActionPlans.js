import React from "react";
import styles from "../styles/ActionPlans.module.css";
import MainHeader from "../components/MainHeader";

const ActionPlans = () => {
  return (
    <div className={styles.HeaderOuterDiv}>
      <MainHeader headerName="Action Plane" />
    </div>
  );
};

export default ActionPlans;
