import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import styles from "../styles/Footer.module.css";

// Footer
function Footer() {
  return (
    <div className={styles.FooterMainDiv}>
      <AppBar sx={{ position: { xs: "sticky", md: "relative" } }}>
        <Container
          maxWidth="xl"
          sx={{
            backgroundColor: "lightgrey",
            color: "black",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p>&copy; 2024 PHN Technology</p>
        </Container>
      </AppBar>
    </div>
  );
}
export default Footer;
