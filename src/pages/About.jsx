import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import VerifiedIcon from "@mui/icons-material/Verified";
import NewReleasesIcon from "@mui/icons-material/NewReleases";

export default function About() {
  return (
    <div className="App">
      <Box>
        <Typography variant="h3" sx={{ marginBottom: 2 }}>
          AirportCodes.IN
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          List down all the Indian airport via their code and other details
        </Typography>
        <Typography variant="subtitle2">
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#ededed" }}>
                  <VerifiedIcon sx={{ color: "orange" }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="About Page"
                secondary="A simple about us page"
              ></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#ededed" }}>
                  <VerifiedIcon sx={{ color: "orange" }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Listings Page"
                secondary="Listings of all Airports - Homepage"
              ></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#ededed" }}>
                  <NewReleasesIcon sx={{ color: "red" }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Search"
                secondary="Ability to seach via code, city / state / airport name"
              ></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#ededed" }}>
                  <NewReleasesIcon sx={{ color: "red" }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Performance Optimization"
                secondary="Pagination / load more button to display fewer initial airports"
              ></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#ededed" }}>
                  <NewReleasesIcon sx={{ color: "red" }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Share Modal"
                secondary="/airport/<BOM> -> Shows a specific modal / page with option to shares it as an image to social media sites via a click"
              ></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#ededed" }}>
                  <NewReleasesIcon sx={{ color: "red" }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Site Audit"
                secondary="Final Checks"
              ></ListItemText>
            </ListItem>
          </List>
        </Typography>
        <Typography variant="caption">
          Initial version of this site -{" "}
          <a href="https://airport-codes-v1.netlify.app/" target="_blank">
            https://airport-codes-v1.netlify.app/
          </a>
        </Typography>
      </Box>
    </div>
  );
}
