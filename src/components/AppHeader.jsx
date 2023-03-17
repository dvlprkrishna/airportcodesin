import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Badge,
  Button,
  Link,
} from "@mui/material";
import React from "react";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

import { styled, alpha } from "@mui/material/styles";
import { useProSidebar } from "react-pro-sidebar";

import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "26ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

export default function AppHeader() {
  /** @type {import('@mui/material').SxProps} */
  const styles = {
    appBar: {
      bgcolor: "neutral.main",
    },
    appLogo: {
      width: 250,
      marginLeft: 2,
      cursor: "pointer",
    },
  };

  const { collapseSidebar, toggleSidebar, broken } = useProSidebar();

  return (
    <AppBar sx={styles.appBar} position="sticky">
      <Toolbar sx={{ mx: 4 }}>
        <Link href="/">
          <Box component="img" sx={styles.appLogo} src="/src/assets/logo.png" />
        </Link>
        <Box sx={{ flexGrow: 1 }} />
        <Search sx={{ mr: 3 }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Find your airport - Ex. BBI"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Link sx={{ mr: 5 }} href="/about" underline="hover" color="inherit">
          About
        </Link>
      </Toolbar>
    </AppBar>
  );
}
