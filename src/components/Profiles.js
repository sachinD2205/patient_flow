import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import styles from "../styles/Profile.module.css";

const Profiles = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <div className={styles.ProfileMainDiv}>
      <div className={styles.Drawer}>drawer</div>
      <div className={styles.Content}>content</div>
    </div>
  );
};

export default Profiles;
