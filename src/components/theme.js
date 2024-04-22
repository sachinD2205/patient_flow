import { createTheme } from "@mui/material";

// Sachin
const theme = createTheme({
  //  Mui c
  components: {
    // Select
    MuiSelect: {
      defaultProps: {
        variant: "standard",
        size: "small",
        margin: "normal",
      },
      styleOverrides: {
        root: {
          width: 230,
          marginTop: "1vh",
          paddingRight: "0",
          "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: "black",
          },
        },
      },
    },

    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "black",
        },
      },
    },

    // TextFiled
    MuiTextField: {
      defaultProps: {
        variant: "standard",
        size: "small",
        margin: "normal",
      },

      styleOverrides: {
        root: {
          width: 230,
          marginTop: "3vh",
          color: "black",
          "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: "black",
          },
        },
      },
    },

    // Form Control
    MuiFormControl: {
      defaultProps: {
        variant: "standard",
        size: "small",
        margin: "normal",
      },
      styleOverrides: {
        root: {
          "& .Mui-disabled": {
            WebkitTextFillColor: "black",
          },
        },
      },
    },

    // Helper Text
    MuiFormHelperText: {
      defaultProps: {
        variant: "standard",
        size: "small",
        margin: "normal",
      },
      styleOverrides: {
        root: {
          width: 230,
        },
      },
    },
    // TextFiled - Text Size
    MuiInputLabel: {
      defaultProps: {
        sx: {
          fontSize: 15,
          color: "black",
        },
      },
      styleOverrides: {
        root: {
          "& .Mui-disabled": {
            WebkitTextFillColor: "green",
          },
        },
      },
    },

    MuiButton: {
      defaultProps: {
        variant: "contained",
        size: "large",
        color: "primary",
      },
    },
  },
});

export default theme;
