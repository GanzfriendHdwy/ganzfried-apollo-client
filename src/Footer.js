import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

import images from "../images";
const { icons } = images;

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  iconsBox: {
    backgroundImage: `url(${icons})`,
    height: "15vh",
    width: "90vw",
    margin: spacing(2),
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain"
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.iconsBox} />
    </div>
  );
}
