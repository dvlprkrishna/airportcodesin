import { Box } from "@mui/material";
import React, { useState } from "react";
import AirportCard from "../components/AirportCard";
import JSON from "../json/airports.json";
import { v4 as uuidv4 } from "uuid";

/** @type {import('@mui/material').SxProps} */
const styles = {
  listWrap: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

export default function Listing() {
  const [initialJson, setInitialJson] = useState(JSON);
  const [keyword, setKeyword] = useState("");
  const [filteredJson, setFilteredJson] = useState("");

  return (
    <>
      <Box sx={styles.listWrap}>
        {JSON.map((item) => {
          return (
            <AirportCard
              iata={item.iata}
              airportname={item.airportname}
              cityserved={item.cityserved}
              icao={item.icao}
              category={item.category}
              role={item.role}
              state={item.state}
              key={uuidv4()}
            />
          );
        })}
      </Box>
    </>
  );
}
