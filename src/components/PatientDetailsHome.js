import { IconButton, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "../styles/PatientDetailsHome.module.css";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link } from "react-router-dom";

const PatientDetailsHome = ({ consultationsList }) => {
  const [currentPatientData, setCurrentPatientData] = useState(null);

  const viewClinicRecord = (data) => {
    localStorage.setItem("clickedPatientDetails", JSON.stringify(data));
    console.log("Data", data);
  };

  useEffect(() => {
    console.log("consultationsList", consultationsList[0]);
    if (consultationsList?.length > 0) {
      setCurrentPatientData(consultationsList[0]);
    }
  }, [consultationsList]);

  // view
  return (
    <Paper square elevation={5} className={styles.Paper}>
      {currentPatientData ? (
        <>
          <div style={{ padding: "2vh" }}>
            <div style={{ display: "flex" }}>
              <h3>Next Patients Details </h3>
              <Link to={"/profile"}>
                <div style={{ padding: "3vh 2vw 2vh 5vw" }}>
                  <IconButton
                    onClick={() => viewClinicRecord(currentPatientData)}
                    color="primary"
                  >
                    <LaunchIcon />
                  </IconButton>
                </div>
              </Link>
            </div>
            <div>
              <b>Name :</b> {currentPatientData?.name}
            </div>
            <div>
              <b>Gender :</b> {currentPatientData?.gender}
            </div>
            <div>
              <b>Age :</b> {currentPatientData?.age}
            </div>
            <div>
              <b>Phone Number :</b> {currentPatientData?.phone}
            </div>
            <div>
              <b>Email Id :</b> {currentPatientData?.email}
            </div>
            <div>
              <b>Address :</b> {currentPatientData?.address}
            </div>
            <div>
              <b>Additional Info :</b> {currentPatientData?.additional_info}
            </div>
          </div>
        </>
      ) : (
        <div style={{ height: "40vh", width: "30vw" }}></div>
      )}
    </Paper>
  );
};

export default PatientDetailsHome;
