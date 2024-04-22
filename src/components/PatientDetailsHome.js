import { Paper } from "@mui/material";
import React from "react";
import styles from "../styles/PatientDetailsHome.module.css";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link } from "react-router-dom";

const PatientDetailsHome = () => {
  return (
    <Paper square elevation={5} className={styles.Paper}>
      <div style={{ padding: "2vh" }}>
        <div style={{ display: "flex" }}>
          <h3>Next Patients Details </h3>
          <Link to={"/profile"}>
            <div style={{ padding: "3vh 2vw 2vh 5vw" }}>
              <LaunchIcon />
            </div>
          </Link>
        </div>
        <div>George Hill</div>
        <div>25 years old | New York, USA</div>
        <div>Summary -</div>
        <div>
          James is a 32-year-old male with no known allergies or drug
          sensitivities. He has a history of seasonal allergies and occasional
          migraines. He takes no medications regularly.
        </div>
      </div>
    </Paper>
  );
};

export default PatientDetailsHome;
