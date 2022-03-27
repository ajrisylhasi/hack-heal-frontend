import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import { useHistory } from "react-router-dom";
import { authActions } from "../../store/auth-reducer";
import { storeContext } from "../provider/Provider";

const SecondaryListItems = () => {
  const { dispatch } = React.useContext(storeContext);
  const history = useHistory();
  const handleLogout = () => {
    dispatch({ type: authActions.LOGOUT });
    history.push("/home");
  };

  return (
    <ListItemButton onClick={handleLogout}>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
  );
};
export default SecondaryListItems;
