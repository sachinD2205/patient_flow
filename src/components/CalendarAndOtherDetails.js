import React from "react";
import CalendarForAppointmentView from "./CalendarForAppointmentView";
import PatientDetailsHome from "./PatientDetailsHome";
import styles from "../styles/CalendarAndOtherDetails.module.css";

const CalendarAndOtherDetails = () => {
  return (
    <div>
      {/**   <Paper square elevation={5} className={styles.Paper}>
       */}
      <div className={styles.mainDiv}>
        <div>
          <CalendarForAppointmentView />
        </div>

        <div>
          <PatientDetailsHome />
        </div>
      </div>
      {/**
      </Paper>
       */}
    </div>
  );
};

export default CalendarAndOtherDetails;
