import React from "react";
import styles from "../styles/HomePage.module.css";
import UpcomingConsultations from "./UpcomingConsultations";
import DailyReadTodayTask from "../components/DailyReadTodayTask";
import CalendarAndOtherDetails from "../components/CalendarAndOtherDetails";

const HomePage = () => {
  return (
    <div className={styles.HomePageMainDiv}>
      <div className={styles.content1}>
        <DailyReadTodayTask />
        <CalendarAndOtherDetails />
      </div>
      <div className={styles.content2}>
        <UpcomingConsultations />
      </div>
    </div>
  );
};

export default HomePage;
