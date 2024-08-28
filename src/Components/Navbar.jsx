import { useState } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Mail, Notifications, Pets } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "15px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "15px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Head = styled(Toolbar)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export default function Navbar({ drawerWidth, showDrawer }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: 0, md: `${drawerWidth}px` },
        }}
      >
        <Head>
          <IconButton
            color="inherit"
            onClick={() => {
              showDrawer();
            }}
            sx={{
              display: {
                sm: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            underline="none"
            sx={{
              display: { xs: "none", sm: "block" },
              ml: "10px",
              flexGrow: 1,
              cursor: "pointer",
            }}
            component="p"
            color="inherit"
          >
            LAMA DEV
          </Typography>
          <Pets sx={{ display: { xs: "block", sm: "none" }, flexGrow: 1 }} />
          <Icons>
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
            <Badge badgeContent={2} color="error">
              <Notifications />
            </Badge>
            <Avatar
              onClick={() => setShow(true)}
              sx={{ width: "30px", height: "30px" }}
              src="https:/mui.com/static/images/avatar/2.jpg"
            />
          </Icons>
          <UserBox onClick={() => setShow(true)}>
            <Avatar
              sx={{ width: "30px", height: "30px" }}
              src="https:/mui.com/static/images/avatar/2.jpg"
            />
          </UserBox>
          <Menu
            id="demo-positioned-menu"
            open={show}
            onClose={() => setShow(false)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </Head>
      </AppBar>
    </>
  );
}

Navbar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
  showDrawer: PropTypes.func.isRequired,
};

// export default Navbar;
