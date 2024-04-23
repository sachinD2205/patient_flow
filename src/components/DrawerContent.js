import React from "react";
import styles from "../styles/DrawerContent.module.css";
import { Link } from "react-router-dom";

// DrawerContent
const DrawerContent = () => {
  const DrawerItems = [
    {
      name: "Patient Information",
      path: "/profile",
    },
    {
      name: "General Information",
      path: "/profile/GeneralInformation",
    },
    {
      name: "Medical History",
      path: "/profile/MedicalHistory",
    },
    {
      name: "Action Files",
      path: "/profile/ActionPlans",
    },
    {
      name: "Files",
      path: "/profile/Files",
    },
    {
      name: "WearableStats",
      path: "/profile/WearableStats",
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
