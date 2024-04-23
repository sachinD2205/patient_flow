import React, { useEffect, useState } from "react";
import styles from "../styles/HomePage.module.css";
import UpcomingConsultations from "./UpcomingConsultations";
import DailyReadTodayTask from "../components/DailyReadTodayTask";
import CalendarAndOtherDetails from "../components/CalendarAndOtherDetails";
import axios from "axios";

const HomePage = () => {
  const [consultationsList, setConsultationList] = useState([]);

  const getConsultationsList = () => {
    const url = `https://assessment.banoskolar.com/api/patientsList`;

    axios
      .get(url)
      .then((res) => {
        console.log("response", res?.data?.patients);
        const patientsList = res?.data?.patients;
        if (patientsList?.length > 0) {
          setConsultationList(patientsList);
        }
      })
      .catch((error) => {
        console.log("getConsultationsList_Api_Error", error);
        alert("error_occurred - patientsList API");
      });
  };
  useEffect(() => {
    localStorage.removeItem("clickedPatientDetails");
    getConsultationsList();
  }, []);
  return (
    <div className={styles.HomePageMainDiv}>
      <div className={styles.content1}>
        <DailyReadTodayTask />
        <CalendarAndOtherDetails consultationsList={consultationsList} />
      </div>
      <div className={styles.content2}>
        <UpcomingConsultations consultationsList={consultationsList} />
      </div>
    </div>
  );
};

export default HomePage;
