
import React, { useState } from "react";
import { useStyles } from "./LoginAdmincss";

import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Swal from "sweetalert2";

import { postData } from "../../Services/FetchNodeService";

export default function LoginAdmin() {
  const classes = useStyles();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // =========================================================
  // LOGIN SUBMIT
  // =========================================================
  const handleSubmit = async () => {
    // Validation
    if (!id.trim() || !password.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Please enter Email/Mobile and Password",
        showConfirmButton: false,
        timer: 2000,
        toast: true,
      });

      return;
    }

    setLoading(true);

    try {
      // =====================================================
      // LOGIN BODY
      // =====================================================
      const body = {
        id: id.trim(),
        password: password,
      };

      console.log("ADMIN LOGIN BODY:", body);

      // =====================================================
      // API CALL
      // =====================================================
      const res = await postData("admin/chk_admin_login", body);

      console.log("ADMIN LOGIN RESPONSE:", res);

      // =====================================================
      // LOGIN SUCCESS
      // =====================================================
      if (res && res.status === true) {
        console.log("ADMIN LOGIN SUCCESS");

        // ---------------------------------------------------
        // SAVE ADMIN DATA
        // ---------------------------------------------------
        localStorage.setItem(
          "ADMIN",
          JSON.stringify(res.data || {})
        );

        // ---------------------------------------------------
        // SAVE TOKEN ONLY IF BACKEND SENDS IT
        // ---------------------------------------------------
        if (res.token) {
          localStorage.setItem("ADMIN_TOKEN", res.token);

          console.log(
            "ADMIN TOKEN SAVED:",
            localStorage.getItem("ADMIN_TOKEN")
          );
        } else {
          // Remove old/stale token if backend did not send one
          localStorage.removeItem("ADMIN_TOKEN");

          console.log("No ADMIN_TOKEN received from backend");
        }

        // ---------------------------------------------------
        // SUCCESS MESSAGE
        // ---------------------------------------------------
        await Swal.fire({
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1000,
          toast: true,
        });

        // ---------------------------------------------------
        // OPEN ADMIN DASHBOARD
        // ---------------------------------------------------
        console.log("REDIRECTING TO ADMIN DASHBOARD...");

        window.location.href = "/admindashboard";

        return;
      }

      // =====================================================
      // LOGIN FAILED
      // =====================================================
      Swal.fire({
        icon: "error",
        title:
          res?.message ||
          "Invalid Admin ID / Password",
        showConfirmButton: false,
        timer: 3000,
        toast: true,
      });
    } catch (error) {
      console.error("ADMIN LOGIN ERROR:", error);

      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text:
          error?.message ||
          "Unable to connect to server.",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // ENTER KEY LOGIN
  // =========================================================
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !loading) {
      handleSubmit();
    }
  };

  // =========================================================
  // UI
  // =========================================================
  return (
    <div className={classes.root}>

      {/* =================================================
          LEFT BRAND PANEL
      ================================================= */}

      <div className={classes.brandPanel}>

        <div className={classes.brandTop}>
          <span className={classes.brandLogoDot} />

          <span className={classes.brandName}>
            Dropshy
          </span>
        </div>

        <div className={classes.brandMiddle}>
          <h1 className={classes.brandHeadline}>
            Everything you post,
            <br />
            one place to run it.
          </h1>

          <p className={classes.brandSubtext}>
            Sign in to manage blogs, banners and
            the content that keeps Dropshy moving.
          </p>
        </div>

        <div className={classes.brandFooter}>
          © {new Date().getFullYear()} Dropshy.
          All rights reserved.
        </div>

        {/* =================================================
            PARCEL ILLUSTRATION
        ================================================= */}

        <div className={classes.illustrationWrap}>
          <svg
            viewBox="0 0 420 360"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
          >
            <circle
              cx="330"
              cy="90"
              r="120"
              fill="#FFFFFF"
              opacity="0.05"
            />

            <circle
              cx="300"
              cy="260"
              r="70"
              fill="#FFFFFF"
              opacity="0.06"
            />

            {/* Dashed Route */}
            <path
              d="M40 300 C120 260,160 200,150 140 S230 40,320 60"
              fill="none"
              stroke="#7CE0FF"
              strokeWidth="2"
              strokeDasharray="2 10"
              strokeLinecap="round"
              opacity="0.55"
            />

            {/* Large Parcel */}
            <g transform="translate(190 150) rotate(-6)">
              <rect
                x="0"
                y="0"
                width="120"
                height="100"
                rx="10"
                fill="#0F5C86"
              />

              <rect
                x="0"
                y="0"
                width="120"
                height="34"
                rx="10"
                fill="#11A7E6"
              />

              <rect
                x="52"
                y="0"
                width="16"
                height="100"
                fill="#0B3B57"
                opacity="0.5"
              />
            </g>

            {/* Small Parcel */}
            <g transform="translate(70 210) rotate(8)">
              <rect
                x="0"
                y="0"
                width="64"
                height="56"
                rx="8"
                fill="#7CE0FF"
                opacity="0.9"
              />

              <rect
                x="27"
                y="0"
                width="10"
                height="56"
                fill="#0B3B57"
                opacity="0.35"
              />
            </g>

            {/* Small Parcel */}
            <g transform="translate(300 210) rotate(-10)">
              <rect
                x="0"
                y="0"
                width="46"
                height="40"
                rx="6"
                fill="#FFFFFF"
                opacity="0.85"
              />

              <rect
                x="19"
                y="0"
                width="8"
                height="40"
                fill="#0B3B57"
                opacity="0.3"
              />
            </g>

            {/* Motion Dots */}
            <circle
              cx="345"
              cy="70"
              r="4"
              fill="#7CE0FF"
            />

            <circle
              cx="60"
              cy="290"
              r="4"
              fill="#7CE0FF"
              opacity="0.7"
            />
          </svg>
        </div>
      </div>

      {/* =================================================
          RIGHT FORM PANEL
      ================================================= */}

      <div className={classes.formPanel}>

        <div className={classes.formInner}>

          {/* Mobile Logo */}
          <div className={classes.mobileLogoRow}>
            <span className={classes.mobileLogoDot} />

            <span className={classes.mobileLogoText}>
              Dropshy
            </span>
          </div>

          {/* Heading */}
          <h2 className={classes.formHeading}>
            Welcome back
          </h2>

          <p className={classes.formSubheading}>
            Sign in to your admin account to continue.
          </p>

          {/* =================================================
              EMAIL / MOBILE
          ================================================= */}

          <div className={classes.fieldGroup}>
            <FormControl fullWidth>
              <label className={classes.fieldLabel}>
                Email or mobile
              </label>

              <TextField
                fullWidth
                className={classes.textField}
                placeholder="Enter email or mobile number"
                value={id}
                onChange={(event) =>
                  setId(event.target.value)
                }
                onKeyDown={handleKeyDown}
              />
            </FormControl>
          </div>

          {/* =================================================
              PASSWORD
          ================================================= */}

          <div className={classes.fieldGroup}>
            <FormControl fullWidth>
              <label className={classes.fieldLabel}>
                Password
              </label>

              <TextField
                fullWidth
                type="password"
                className={classes.textField}
                placeholder="Enter your password"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                onKeyDown={handleKeyDown}
              />
            </FormControl>
          </div>

          {/* =================================================
              LOGIN BUTTON
          ================================================= */}

          <Button
            fullWidth
            variant="contained"
            className={classes.submitBtn}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log in"}
          </Button>

          <div className={classes.helperRow}>
            Trouble signing in? Contact your team admin.
          </div>

        </div>
      </div>
    </div>
  );
}

