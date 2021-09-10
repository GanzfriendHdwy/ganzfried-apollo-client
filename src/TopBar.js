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
    height: "5vh",
    width: "15vw",
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
    height: "60vh",
    width: "60vw",
    margin: spacing(2),
    backgroundRepeat: "no-repeat"
  },
  detailsBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  },
  leftSideDetailsBox: {
    display: "flex",
    flexDirection: "column",
    gap: spacing(2)
  },
  btnBox: {
    display: "flex",
    gap: spacing(2)
  }
}));

export default function TopBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="inherit" position="static">
        <Toolbar className={classes.toolBar}>
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
      <div className={classes.detailsBox}>
        <Box className={classes.leftSideDetailsBox}>
          <Typography variant="h4">Your Brand on Your Links</Typography>
          <Typography gutterBottom variant="caption">
            Rebrandly is the industry-leading link management platform to brand,
            track, and share short URLs using a custom domain name
          </Typography>
          <Box className={classes.btnBox}>
            <Button variant="contained" color="primary">
              Sign up free
            </Button>
            <Button variant="outlined" color="primary">
              Request a demo
            </Button>
          </Box>
        </Box>
        <Box className={classes.headshotBox} />
      </div>
    </div>
  );
}
