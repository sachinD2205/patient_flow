import React from "react";
import styles from "../styles/MainHeader.module.css";

const MainHeader = ({ headerName }) => {
  return <div className={styles.MainHeader}>{headerName}</div>;
};

export default MainHeader;
