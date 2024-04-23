import { Dialog } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import PatientDetails from "./PatientDetails";

const PatientInformationDialog = ({ dialogState, setDialogState }) => {
  const {
    control,
    register,
    setValue,
    watch,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  // view
  return (
    <div>
      <Dialog
        fullWidth
        maxWidth={"xl"}
        open={dialogState}
        onClose={() => {
          setValue("disabledFieldInputState", false);
          setDialogState(false);
        }}
      >
        <PatientDetails
          setDialogClose={() => {
            setDialogState(false);
          }}
        />
      </Dialog>
    </div>
  );
};

export default PatientInformationDialog;
