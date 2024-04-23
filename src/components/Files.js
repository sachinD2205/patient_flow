import React from "react";
import styles from "../styles/Files.module.css";
import MainHeader from "../components/MainHeader";

const Files = () => {
  return (
    <div className={styles.HeaderOuterDiv}>
      <MainHeader headerName="Files" />
    </div>
  );
};

export default Files;
