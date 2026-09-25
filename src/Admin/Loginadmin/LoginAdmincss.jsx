import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    width: "100%",
    fontFamily: "'Inter', 'Roboto', sans-serif",
    background: "#F5F7F9",

    "@media (max-width: 900px)": {
      display: "block",
    },
  },

  // ---------- LEFT BRAND PANEL ----------
  brandPanel: {
    position: "relative",
    flex: "0 0 44%",
    minHeight: "100vh",
    overflow: "hidden",
    background: "linear-gradient(160deg, #072035 0%, #0B3B57 45%, #11A7E6 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "56px 56px 40px",
    boxSizing: "border-box",

    "@media (max-width: 900px)": {
      display: "none",
    },
  },

  brandTop: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },

  brandLogoDot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    background: "#7CE0FF",
    flexShrink: 0,
  },

  brandName: {
    fontFamily: "'Kanit', sans-serif",
    fontSize: 22,
    fontWeight: 600,
    color: "#FFFFFF",
    letterSpacing: "0.02em",
  },

  brandMiddle: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
    maxWidth: 420,
  },

  brandHeadline: {
    fontFamily: "'Kanit', sans-serif",
    fontSize: 38,
    lineHeight: 1.25,
    fontWeight: 500,
    color: "#FFFFFF",
    margin: 0,
  },

  brandSubtext: {
    fontSize: 15,
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.72)",
    margin: 0,
    maxWidth: 360,
  },

  illustrationWrap: {
    position: "absolute",
    right: -60,
    bottom: -40,
    width: 420,
    opacity: 0.95,
    pointerEvents: "none",
  },

  brandFooter: {
    fontSize: 13,
    color: "rgba(255,255,255,0.5)",
  },

  // ---------- RIGHT FORM PANEL ----------
  formPanel: {
    flex: "1 1 56%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 24px",
    boxSizing: "border-box",
  },

  formInner: {
    width: "100%",
    maxWidth: 360,
  },

  mobileLogoRow: {
    display: "none",
    alignItems: "center",
    gap: 10,
    marginBottom: 40,

    "@media (max-width: 900px)": {
      display: "flex",
    },
  },

  mobileLogoDot: {
    width: 9,
    height: 9,
    borderRadius: "50%",
    background: "#11A7E6",
  },

  mobileLogoText: {
    fontFamily: "'Kanit', sans-serif",
    fontSize: 19,
    fontWeight: 600,
    color: "#0B3B57",
  },

  formHeading: {
    fontFamily: "'Kanit', sans-serif",
    fontSize: 28,
    fontWeight: 500,
    color: "#0B1F2E",
    margin: "0 0 8px",
  },

  formSubheading: {
    fontSize: 14,
    color: "#64748B",
    margin: "0 0 36px",
    lineHeight: 1.6,
  },

  fieldGroup: {
    marginBottom: 22,
  },

  fieldLabel: {
    display: "block",
    fontSize: 13,
    fontWeight: 600,
    color: "#2A3B47",
    marginBottom: 8,
  },

  textField: {
    "& .MuiOutlinedInput-root": {
      borderRadius: 10,
      background: "#FFFFFF",
      fontSize: 15,

      "& fieldset": {
        borderColor: "#D9E1E7",
      },
      "&:hover fieldset": {
        borderColor: "#9FCBE0",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#11A7E6",
        borderWidth: 1.5,
      },
    },
    "& .MuiOutlinedInput-input": {
      padding: "13px 14px",
    },
  },

  submitBtn: {
    marginTop: 8,
    padding: "13px",
    fontSize: 15,
    fontWeight: 600,
    textTransform: "none",
    borderRadius: 10,
    background: "linear-gradient(90deg, #0B3B57 0%, #11A7E6 100%)",
    boxShadow: "none",

    "&:hover": {
      background: "linear-gradient(90deg, #0A3350 0%, #0d8fc5 100%)",
      boxShadow: "none",
    },
    "&.Mui-disabled": {
      background: "#B7C2C9",
      color: "#fff",
    },
  },

  helperRow: {
    marginTop: 28,
    fontSize: 13,
    color: "#8A97A0",
    textAlign: "center",
  },
}));

export { useStyles };