import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Paper,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import styles from "../styles/UpcomingConsultation.module.css";
import { Link } from "react-router-dom";

const UpcomingConsultations = ({ consultationsList }) => {
  const viewClinicRecord = (data) => {
    localStorage.setItem("clickedPatientDetails", JSON.stringify(data));
    console.log("Data", data);
  };

  // view
  return (
    <Paper square elevation={5} className={styles.Paper}>
      <div className={styles.HeaderConsultations}>
        Upcoming Consultations...
      </div>

      <div className={styles.HeaderCard}>
        {consultationsList?.length > 0 ? (
          consultationsList?.map((data, index) => (
            <>
              <Card
                variant="outlined"
                key={index + 1}
                className={styles.cardsConsultations}
              >
                <CardContent>
                  <Typography
                    className={styles.headerTitle}
                    gutterBottom
                    onClick={() => viewClinicRecord(data)}
                  >
                    <Link to="/profile">{data?.name}</Link>
                  </Typography>
                  <Typography variant="body2">
                    {data?.gender} | {data?.age}
                  </Typography>
                  <Typography variant="body2">
                    {data?.phone} | {data?.email}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to="/profile">
                    <Button
                      variant="contained"
                      endIcon={<VisibilityIcon />}
                      onClick={() => viewClinicRecord(data)}
                    >
                      View Clinical Record
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </>
          ))
        ) : (
          <></>
        )}
      </div>
    </Paper>
  );
};

export default UpcomingConsultations;
