import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import styles from "../styles/CalendarForAppointmentView.module.css";
import { Paper } from "@mui/material";

const CalendarForAppointmentView = () => {
  return (
    <Paper square elevation={5} className={styles.Paper}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
      </LocalizationProvider>
    </Paper>
  );
};

export default CalendarForAppointmentView;
