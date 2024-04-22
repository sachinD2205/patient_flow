import {
  Button,
  Card,
  CardActions,
  CardContent,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import styles from "../styles/DailyReadTodayTask.module.css";
const DailyReadTodayTask = () => {
  return (
    <div>
      <Paper square elevation={5} className={styles.Paper}>
        <div className={styles.PaperDiv}>
          <div>
            <div className={styles.DailyRead}> Daily Read</div>
            <image
              src="../assets/images/healthcare.jpg"
              style={{ width: "200px", height: "200px" }}
            />
            <div>
              Incididunt reprehenderit laboris deserunt veniam Lorem cupidatat
              eiusmod aliqua amet proident esse anim sint. Magna sunt laborum
              labore non amet. Enim voluptate excepteur ut officia. Culpa anim
              magna ad velit eu aute do. Eu reprehenderit deserunt consequat
              irure ea adipisicing exercitation aute nulla duis ut amet laborum
              magna. Nisi occaecat et officia sint aliqua ex amet exercitation
              ipsum cillum qui veniam. Sunt ipsum deserunt esse laborum
              exercitation anim nisi ex aute qui ex nisi.
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default DailyReadTodayTask;
