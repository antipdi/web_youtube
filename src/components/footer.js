import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(() => ({
  footerOpen: {
    marginTop: "0.5rem",
    padding: "0.5rem",
    background: "#FFFFFF",
    position: "fixed",
    bottom: 0,
    left: 0,
    width: 240,
    overflowX: 'hidden',
    whiteSpace: "normal",
    borderRight: "1px solid rgba(0, 0, 0, 0.12)",
    textAlign: 'center',
  },
  hide: {
    color: "#FFFFFF",
    overflowX: 'hidden',
    position: "fixed",
    bottom: 0,
    left: 0,
    width: 0
  },
}));


export default function Footer(props) {
  const classes = useStyles();

  return (
    <Box className={clsx({
      [classes.footerOpen]: props.open,
      [classes.hide]: !props.open,
    })}>
      <p>Something here to give the footer a purpose!</p>
    </Box>
  )
}