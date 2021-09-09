import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, Box } from "@material-ui/core";

import images from "../images";
const { logo, icons, headshot } = images;

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  toolBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: spacing(2)
  },
  menuButton: {
    marginRight: spacing(2)
  },
  tabs: {
    flexGrow: 1,
    color: "gray",
    margin: spacing(3)
  },
  logoBox: {
    backgroundImage: `url(${logo})`,
    height: "7vh",
    width: "18vw",
    backgroundRepeat: "no-repeat"
  },
  iconsBox: {
    backgroundImage: `url(${icons})`,
    height: "15vh",
    width: "90vw",
    margin: spacing(2),
    backgroundRepeat: "no-repeat"
  },
  headshotBox: {
    backgroundImage: `url(${headshot})`,
    height: "80vh",
    width: "90vw",
    margin: spacing(2),
    backgroundRepeat: "no-repeat"
  }
}));

export default function TopBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="inherit" position="static">
        <Toolbar className={classes.toolBar}>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Box className={classes.logoBox} />
          <Box>
            <Typography variant="caption" className={classes.tabs}>
              Features
            </Typography>
            <Typography variant="caption" className={classes.tabs}>
              Pricing
            </Typography>
          </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Box className={classes.iconsBox} />
      <Box className={classes.headshotBox} />
    </div>
  );
}
