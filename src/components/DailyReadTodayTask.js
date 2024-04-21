import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import styles from "../styles/DailyReadTodayTask.module.css";
import VisibilityIcon from "@mui/icons-material/Visibility";

const DailyReadTodayTask = () => {
  return (
    <div>
      <Card variant="outlined" className={styles.cardsConsultations}>
        <CardContent>
          <Typography
            className={styles.headerTitle}
            gutterBottom
            // onClick={() => viewClinicRecord(data)}
          >
            dsf
          </Typography>
          <Typography variant="body2">sdf</Typography>
          <Typography variant="body2">dsfd</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default DailyReadTodayTask;
