import React from "react";
import styles from "../styles/WearableStats.module.css";
import MainHeader from "../components/MainHeader";

const WearableStats = () => {
  return (
    <div className={styles.HeaderOuterDiv}>
      <MainHeader headerName="Wearable Stats" />
    </div>
  );
};

export default WearableStats;
