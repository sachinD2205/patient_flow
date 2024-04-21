import React from "react";
import CalendarForAppointmentView from "./CalendarForAppointmentView";
import PatientDetailsHome from "./PatientDetailsHome";
import styles from "../styles/CalendarAndOtherDetails.module.css";
import { Paper } from "@mui/material";

const CalendarAndOtherDetails = () => {
  return (
    <div className={styles.mainDiv}>
      <div>
        <CalendarForAppointmentView />
      </div>
      <div>
        <PatientDetailsHome />
      </div>
    </div>
  );
};

export default CalendarAndOtherDetails;
