import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import styles from "../styles/Profile.module.css";
import PatientInformation from "./PatientInformation";

const Profiles = () => {
  return (
    <div className={styles.ProfileMainDiv}>
      <div className={styles.Drawer}>drawer</div>
      <div className={styles.Content}>
        <PatientInformation />
      </div>
    </div>
  );
};

export default Profiles;
