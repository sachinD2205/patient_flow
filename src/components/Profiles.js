import styles from "../styles/Profile.module.css";
import DrawerContent from "./DrawerContent";
import NewProfile from "./NewProfile";
import PatientInformation from "./PatientInformation";

const Profiles = () => {
  return (
    <div className={styles.ProfileMainDiv}>
      <div className={styles.Drawer}>
        <DrawerContent />
      </div>
      <div className={styles.Content}>
        <NewProfile />
        {/**
        <PatientInformation />
         */}
      </div>
    </div>
  );
};

export default Profiles;
