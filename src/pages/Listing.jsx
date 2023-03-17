import { Box, Card, Typography } from "@mui/material";
import React from "react";

export default function Listing() {
  /** @type {import('@mui/material').SxProps} */
  const styles = {
    ticketCard: {
      display: "inline-block",
      px: 2,
      pt: 2,
      m: 1,
      borderRadius: "2rem",
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23fdf8ed' stroke-width='10' stroke-opacity='0.44'%3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E")`,
    },
    h3: {
      fontFamily: `"Audiowide", sans-serif`,
      fontSize: "2.75rem",
      lineHeight: 0,
      textAlign: "center",
      p: 0,
      m: 0,
    },
    h4: { fontSize: "1.5rem", fontWeight: "bold" },
    hr: {
      height: "3px",
      background: "#ededed",
      border: "0px",
      width: "80%",
      margin: "0.75em auto 1em",
    },
    stateWrap: {
      display: "flex",
      justifyContent: "space-between",
    },

    arrow: { fontSize: "4rem" },
  };

  return (
    <>
      <Card sx={styles.ticketCard}>
        <Box sx={styles.h3}>
          <h3 sx={{ margin: 0 }}>BBI</h3>
        </Box>
        <Box>
          <Box sx={styles.h4}>
            <span className="material-icons" sx={{ mr: 5 }}>
              local_airport
            </span>
            <span>Biju Patnaik International Airport</span>
          </Box>
          <Box sx={styles.hr} />
        </Box>
        <Box sx={styles.stateWrap}>
          <Box>
            <Typography sx={{ fontSize: 18 }}>
              <span>State</span>
              <span className="material-icons">flight_takeoff</span>
            </Typography>
            <Typography sx={{ fontSize: 18 }}>Odisha</Typography>
          </Box>
          <Box>
            <Typography sx={styles.arrow}>
              <span className="material-icons arrow">arrow_right_alt</span>
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: 18 }}>
              <span>State</span>
              <span className="material-icons">flight_land</span>
            </Typography>
            <Typography sx={{ fontSize: 18 }}>Odisha</Typography>
          </Box>
        </Box>
        <Box>
          <Box>
            <Box>
              <p>
                <span className="label">Airport Type:</span>{" "}
                <span className="ticket__status">Commercial</span>
              </p>
              <p>
                <span className="label">IATA:</span> BBI
              </p>
              <p>
                <span className="label">ICAO:</span> VEBS
              </p>
              <p>
                <span className="label">CITY:</span> Bhubaneswar
              </p>
            </Box>
            <Box>
              <h4>
                <span>Bhubaneswar</span>
              </h4>
            </Box>
            <Box>
              <span className="material-icons">qr_code_2</span>
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
}
