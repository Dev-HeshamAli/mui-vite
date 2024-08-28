import {
  AccountCircle,
  Article,
  Diversity3,
  Group,
  Home,
  ModeNight,
  Settings,
  Storefront,
} from "@mui/icons-material";
import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";

import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Toolbar,
} from "@mui/material";

const Sidebar = ({
  drawerWidth,
  setMode,
  NoneOrBlock,
  remove,
  removeDrawer,
}) => {
  const theme = useTheme();
  const currantMode = theme.palette.mode;
  return (
    <Box>
      <Drawer
        sx={{
          display: {
            xs: `${NoneOrBlock}`,
            md: "block",
          },
          width: `${drawerWidth}px`,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: `${drawerWidth}px`,
            boxSizing: "border-box",
          },
        }}
        variant={remove}
        anchor="left"
        open
        onClose={() => {
          removeDrawer();
        }}
      >
        <Toolbar>
          <ListItem disablePadding>
            <ListItemButton sx={{ p: "0px" }}>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                onChange={() => {
                  localStorage.setItem(
                    "currantMode",
                    currantMode === "light" ? "dark" : "light"
                  );
                  setMode(currantMode === "light" ? "dark" : "light");
                }}
              />
            </ListItemButton>
          </ListItem>
        </Toolbar>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home Page" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Diversity3 />
              </ListItemIcon>
              <ListItemText primary="Group" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Market" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};


Sidebar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
  NoneOrBlock: PropTypes.string.isRequired,
  setMode: PropTypes.func.isRequired,
  removeDrawer: PropTypes.func.isRequired,
  remove: PropTypes.string.isRequired,
};


export default Sidebar;
