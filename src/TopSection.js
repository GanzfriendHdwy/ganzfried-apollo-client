import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, Box } from "@material-ui/core";

import images from "../images";
const { logo, headshot } = images;

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  topSection: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  toolBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  tabs: {
    flexGrow: 1,
    color: "gray",
    margin: spacing(1.5)
  },
  logoBox: {
    backgroundImage: `url(${logo})`,
    height: "6vh",
    width: "12vw",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain"
  },
  headshotBox: {
    backgroundImage: `url(${headshot})`,
    [breakpoints.up("md")]: {
      height: "70vh",
      width: "70vw"
    },
    // height: `${spacing(20)}px`,
    height: "40vh",
    width: "40vw",
    margin: spacing(2),
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain"
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
    gap: spacing(1)
  }
}));

export default function TopSection() {
  const classes = useStyles();

  return (
    <div className={classes.topSection}>
      <AppBar color="inherit" position="static">
        <Toolbar className={classes.toolBar}>
          <Box className={classes.logoBox} />
          <Box>
            <Typography variant="caption" className={classes.tabs}>
              Features
            </Typography>
            <Typography variant="caption" className={classes.tabs}>
              Domains
            </Typography>
            <Typography variant="caption" className={classes.tabs}>
              Pricing
            </Typography>
            <Typography variant="caption" className={classes.tabs}>
              Enterprise
            </Typography>
          </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.detailsBox}>
        <Box className={classes.leftSideDetailsBox}>
          <Typography variant="h4">Your Brand on Your Links</Typography>
          <Typography gutterBottom variant="subtitle2">
            Rebrandly is the industry-leading link management platform to brand,
            track, and share short URLs using a custom domain name
          </Typography>
          <Box className={classes.btnBox}>
            <Button variant="contained" color="primary" size="small">
              Sign up free
            </Button>
            <Button variant="outlined" color="primary" size="small">
              Request a demo
            </Button>
          </Box>
        </Box>
        <Box className={classes.headshotBox} />
      </div>
    </div>
  );
}
