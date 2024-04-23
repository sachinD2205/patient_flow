import React from "react";
import styles from "../styles/DrawerContent.module.css";
import { Link } from "react-router-dom";

// DrawerContent
const DrawerContent = () => {
  const DrawerItems = [
    {
      name: "General Information",
      path: "/",
    },
    {
      name: "Medical History",
      path: "/",
    },
    {
      name: "Action Files",
      path: "/",
    },
    {
      name: "Files",
      path: "/",
    },
    {
      name: "WearableStats",
      path: "/",
    },
  ];

  // view
  return (
    <div className={styles.DrawerHeader}>
      <div className={styles.HeaderDrawerContent}>Patient Profile</div>
      <div className={styles.DrawerItemsOuterHeader}>
        {DrawerItems?.map((item, i) => (
          <div key={i + 1} className={styles.DrawerItemsInnerHeader}>
            <Link to={item?.path}>
              <div>{item?.name} </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrawerContent;
