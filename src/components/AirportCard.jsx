import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import FlightIcon from "@mui/icons-material/Flight";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function AirportCard(props) {
  /** @type {import('@mui/material').SxProps} */
  const styles = {
    ticketCard: {
      position: "relative",
      display: "inline-block",
      px: 3,
      pt: 1,
      m: 1,
      borderRadius: "0.75rem",
      border: "2px solid grey",
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23fdf8ed' stroke-width='10' stroke-opacity='0.44'%3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E")`,
      width: {
        xs: 1,
        md: "30%",
        // md: `calc((100% / 3) - 0.1px)`,
      },
      height: "fit-content",
      ":after": {
        position: "absolute",
        content: "''",
        zIndex: -1,
        border: `2px solid #6327d7`,
        height: "inherit",
        width: "inherit",
        top: "14px",
        right: 0,
        bottom: 0,
        left: "14px",
      },
    },
    hr: {
      height: "3px",
      background: "#ededed",
      border: "0px",
      width: "80%",
      margin: "0.75em auto 1em",
    },
    destinationsWrap: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
    },
    minWid: {
      width: `calc((100% / 3) - 0.1px)`,
    },
  };

  return (
    console.log(props),
    (
      <>
        <Card sx={styles.ticketCard}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: `"Audiowide", sans-serif`,
              fontSize: "3.5rem",
              lineHeight: 0,
              p: 0,
              m: 0,
              my: 4,
              textAlign: "center",
              color: "neutral.main",
              textShadow: "4px 4px 0 #31313117",
            }}
          >
            {props.iata}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              fontFamily: `"Roboto Condensed", sans-serif`,
              fontSize: "1.5rem",
              color: "neutral.main",
            }}
          >
            <Typography>
              <FlightIcon sx={{ marginRight: "0.25rem" }} />
            </Typography>
            {props.airportname}
          </Typography>
          <Box sx={styles.hr} />

          <Box>
            <TableContainer style={{ overflow: "hidden" }}>
              <Table style={{ tableLayout: "fixed" }} size="small">
                <caption>{props.role}</caption>
                <TableBody>
                  <TableRow style={{ verticalAlign: "top" }}>
                    <TableCell align="left" padding="none">
                      <Typography variant="h6" sx={{ display: "flex" }}>
                        <FlightTakeoffIcon
                          sx={{ marginRight: "0.25rem", color: "#00bfff" }}
                        />{" "}
                        CITY
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{ textAlign: "left" }}
                      >
                        {props.cityserved}
                      </Typography>
                    </TableCell>
                    <TableCell align="center" padding="none">
                      <Typography>
                        <ArrowRightAltIcon
                          sx={{
                            fontSize: "3rem",
                            margin: "0 auto",
                            color: "#b0e0e6",
                          }}
                        />
                      </Typography>
                    </TableCell>
                    <TableCell align="right" padding="none">
                      <Typography
                        variant="h6"
                        sx={{ display: "flex", justifyContent: "end" }}
                      >
                        <FlightLandIcon
                          sx={{ marginRight: "0.25rem", color: "#008080bd" }}
                        />
                        DESTINATION
                      </Typography>
                      <Typography variant="subtitle1">
                        {props.category}
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>

                <TableBody>
                  <TableRow
                    sx={{
                      backgroundColor: "inherit",
                      ":hover": {
                        backgroundColor: "#fff4f4",
                      },
                    }}
                  >
                    <TableCell colSpan={2} align="left" padding="none">
                      <Typography variant="h6">Airport Type :</Typography>
                    </TableCell>
                    <TableCell align="right" padding="none">
                      <Typography>{props.role}</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{
                      backgroundColor: "inherit",
                      ":hover": {
                        backgroundColor: "#fff4f4",
                      },
                    }}
                  >
                    <TableCell colSpan={2} align="left" padding="none">
                      <Typography variant="h6">IATA :</Typography>
                    </TableCell>
                    <TableCell align="right" padding="none">
                      <Typography>{props.iata}</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{
                      backgroundColor: "inherit",
                      ":hover": {
                        backgroundColor: "#fff4f4",
                      },
                    }}
                  >
                    <TableCell colSpan={2} align="left" padding="none">
                      <Typography variant="h6">ICAO :</Typography>
                    </TableCell>
                    <TableCell align="right" padding="none">
                      <Typography>{props.icao}</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{
                      backgroundColor: "inherit",
                      ":hover": {
                        backgroundColor: "#fff4f4",
                      },
                    }}
                  >
                    <TableCell colSpan={2} align="left" padding="none">
                      <Typography variant="h6">STATE :</Typography>
                    </TableCell>
                    <TableCell align="right" padding="none">
                      <Typography>{props.state}</Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Card>
      </>
    )
  );
}
