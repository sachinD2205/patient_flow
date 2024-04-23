import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";
import styles from "../styles/PatientInformation.module.css";
import axios from "axios";

const PatientDetails = ({ setDialogClose }) => {
  const {
    control,
    register,
    setValue,
    watch,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  const updatePatientInformation = () => {
    const id = watch("id");
    console.log("id21312", id);
    const url = `https://assessment.banoskolar.com/api/patient-records/${id}`;

    const finalBodyForApi = {
      ...watch(),
    };

    console.log("finalBodyForApi", finalBodyForApi);

    axios
      .put(url, finalBodyForApi)
      .then((res) => {
        alert("record successfully updated !!!");
        setDialogClose(false);
      })
      .catch((error) => {
        console.log("getConsultationsList_Api_Error", error);
        alert("error_occurred");
      });
  };

  const exitButton = () => {
    console.log("ok");
    setDialogClose(false);
  };

  return (
    <div className={styles.DialogPaper}>
      <div className={styles.DivOuter}>
        <div className={styles.TitleHeader}>Patient Information</div>
      </div>
      <Grid container className={styles.GridContainer}>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={4}
          className={styles.GridItemCenter}
        >
          <TextField
            id="standard-basic"
            disabled={watch("disabledFieldInputState")}
            label="Name"
            {...register("name")}
            error={!!errors?.name}
            helperText={errors?.name ? errors?.name?.message : null}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={4}
          className={styles.GridItemCenter}
        >
          <TextField
            id="standard-basic"
            disabled={watch("disabledFieldInputState")}
            label="Gender"
            {...register("gender")}
            error={!!errors?.gender}
            helperText={errors?.gender ? errors?.gender?.message : null}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={4}
          className={styles.GridItemCenter}
        >
          <TextField
            id="standard-basic"
            disabled={watch("disabledFieldInputState")}
            label="Age"
            {...register("age")}
            error={!!errors?.age}
            helperText={errors?.age ? errors?.age?.message : null}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={4}
          className={styles.GridItemCenter}
        >
          <TextField
            id="standard-basic"
            disabled={watch("disabledFieldInputState")}
            label="Email Id"
            {...register("email")}
            error={!!errors?.email}
            helperText={errors?.email ? errors?.email?.message : null}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={4}
          className={styles.GridItemCenter}
        >
          <TextField
            id="standard-basic"
            disabled={watch("disabledFieldInputState")}
            label="Phone Number"
            {...register("phone")}
            error={!!errors?.phone}
            helperText={errors?.phone ? errors?.phone?.message : null}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={4}
          className={styles.GridItemCenter}
        >
          <TextField
            id="standard-basic"
            disabled={watch("disabledFieldInputState")}
            label="Polict Holder Name"
            {...register("policy_holder")}
            error={!!errors?.policy_holder}
            helperText={
              errors?.policy_holder ? errors?.policy_holder?.message : null
            }
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={4}
          className={styles.GridItemCenter}
        >
          <TextField
            id="standard-basic"
            disabled={watch("disabledFieldInputState")}
            label="Height"
            {...register("height")}
            error={!!errors?.height}
            helperText={errors?.height ? errors?.height?.message : null}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={4}
          className={styles.GridItemCenter}
        >
          <TextField
            id="standard-basic"
            disabled={watch("disabledFieldInputState")}
            label="Weight"
            {...register("weight")}
            error={!!errors?.weight}
            helperText={errors?.weight ? errors?.weight?.message : null}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={4}
          className={styles.GridItemCenter}
        >
          <TextField
            id="standard-basic"
            disabled={watch("disabledFieldInputState")}
            label="Blood Group"
            {...register("blood_group")}
            error={!!errors?.blood_group}
            helperText={
              errors?.blood_group ? errors?.blood_group?.message : null
            }
          />
        </Grid>

        {/**
<Grid
  item
  xs={12}
  sm={6}
  md={4}
  lg={4}
  xl={4}
  className={styles.GridItemCenter}
>
  <FormControl
    sx={{ marginTop: 0 }}
    error={!!errors?.oldLicenseDate}
  >
    <Controller
      control={control}
      name="oldLicenseDate"
      defaultValue={null}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            maxDate={new Date()}
            error={!!errors?.oldLicenseDate}
            disabled={watch("disabledFieldInputState")}
            inputFormat="DD/MM/YYYY"
            label={
              <span style={{ fontSize: 16, marginTop: 2 }}>
                Date Of Birth
              </span>
            }
            value={field.value}
            onChange={(date) =>
              field.onChange(moment(date).format("YYYY-MM-DD"))
            }
            selected={field.value}
            center
            renderInput={(params) => (
              <TextField
                error={!!errors?.oldLicenseDate}
                {...params}
                size="small"
                fullWidth
                InputLabelProps={{
                  style: {
                    fontSize: 12,
                    marginTop: 3,
                  },
                }}
              />
            )}
          />
        </LocalizationProvider>
      )}
    />
    <FormHelperText>
      {errors?.oldLicenseDate
        ? errors?.oldLicenseDate?.message
        : null}
    </FormHelperText>
  </FormControl>
</Grid>
 */}
      </Grid>
      <div className={styles.Buttons}>
        <Button
          type="button"
          size="small"
          color="primary"
          className={styles.buttonSpace}
          onClick={() => updatePatientInformation()}
        >
          Update
        </Button>
        <Button
          type="button"
          size="small"
          color="error"
          className={styles.buttonSpace}
          onClick={() => exitButton()}
        >
          Exit
        </Button>
      </div>
    </div>
  );
};

export default PatientDetails;
