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

const UpcomingConsultations = () => {
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
        alert("error_occurred");
      });
  };

  const viewClinicRecord = (data) => {
    console.log("Data", data);
  };

  useEffect(() => {
    getConsultationsList();
  }, []);

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
                    {data?.name}
                  </Typography>
                  <Typography variant="body2">
                    {data?.gender} | {data?.age}
                  </Typography>
                  <Typography variant="body2">
                    {data?.phone} | {data?.email}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    endIcon={<VisibilityIcon />}
                    onClick={() => viewClinicRecord(data)}
                  >
                    View Clinical Record
                  </Button>
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
