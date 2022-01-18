import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Navigation2 from "./navigation2.js";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import Fab from "@mui/material/Fab";
import LayersIcon from "@mui/icons-material/Layers";
import MenuItem from "@mui/material/MenuItem";
const baseimg =
  "https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/projects%2FdorptVQTHsbkYC60NSlt%2Fscenes%2F1567170849457-base?alt=media&token=cf8bcee2-bf89-4fd9-8bfd-9d4462348844";

// import { baseimg } from "../firebase/endpoints";
import mats from "../firebase/mats";

const matsUpper = mats[1].materials;
const matsLower = mats[0].materials;

console.log('mats', matsLower)

const useStyles = makeStyles({
  root: {
    marginTop: "30px",
    marginLeft: "30px",
  },
});

export default function Home() {
  const [upper, setUpper] = useState(matsUpper[0].layer);
  const [lower, setlower] = useState(matsLower[0].layer);

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = (link) => {
    setAnchorEl2(null);
  };


  const handleCloseUpper = (link) => {
    setAnchorEl(null);
    setUpper(link);
  };

  const handleCloseLower = (link) => {
    setAnchorEl2(null);
    setlower(link);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <div className="mt-6 ml-16">
            <Fab variant="extended" onClick={handleClick2}>
              <LayersIcon sx={{ mr: 1 }} />
              Floor
            </Fab>
            <Menu
              id="lower-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl2}
              open={open2}
              onClose={handleClose2}
              PaperProps={{
                style: {
                  width: "20ch",
                },
              }}
            >
              {matsLower.map((lower) => (
                <MenuItem
                  key={lower.layer}
                  onClick={() => handleCloseLower(lower.layer)}
                >
                  {lower.name}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="mt-6 ml-16">
            <Fab variant="extended" onClick={handleClick}>
              <LayersIcon sx={{ mr: 1 }} />
              Upper
            </Fab>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  width: "20ch",
                },
              }}
            >
              {matsUpper.map((option) => (
                <MenuItem
                  key={option.layer}
                  onClick={() => handleCloseUpper(option.layer)}
                >
                  {option.name}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Grid>
      </Grid>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <img src={baseimg} className="static" />
        <img src={upper} className="z-0 hover:z-50 absolute top-34 left-73" />
        <img src={lower} className="z-0 hover:z-50 absolute top-34 left-73" />
      </div>
    </>
  );
}
