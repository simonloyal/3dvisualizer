import * as React from "react";
import { makeStyles } from "@mui/styles";
import Menu from "@mui/material/Menu";
import Fab from "@mui/material/Fab";
import LayersIcon from "@mui/icons-material/Layers";
import MenuItem from "@mui/material/MenuItem";

const options = [
  "Tanzania Almond",
  "Tanzania Natural",
  "Tanzania Silver",
  "Tanzania Taupe",
];

const useStyles = makeStyles({
  root: {
    marginTop: "30px",
    marginLeft: "30px",
  },
});

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="mt-6 ml-16">
      <Fab variant="extended" onClick={handleClick}>
        <LayersIcon sx={{ mr: 1 }} />
        Floor
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
            maxHeight: ITEM_HEIGHT * 5.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
