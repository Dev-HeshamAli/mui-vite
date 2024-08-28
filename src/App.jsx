import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Rightbar from "./Components/Rightbar";
import AddButton from "./Components/AddButton";
import { Box, createTheme, CssBaseline, Stack } from "@mui/material";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";

const App = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("currantMode") === null
      ? "light"
      : localStorage.getItem("currantMode") === "light"
      ? "light"
      : "dark"
  );

  const [remove, setRemove] = useState("permanent");
  const [NoneOrBlock, setNoneOrBlock] = useState("none");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const showDrawer = () => {
    setRemove("temporary");
    setNoneOrBlock("block");
  };

  const removeDrawer = () => {
    setNoneOrBlock("none");
    setRemove("permanent");
  };
  const drawerWidth = 220;
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box>
        <Navbar drawerWidth={drawerWidth} showDrawer={showDrawer} />
        <Stack direction="row" justifyContent="space-between">
          <Sidebar
            drawerWidth={drawerWidth}
            setMode={setMode}
            NoneOrBlock={NoneOrBlock}
            remove={remove}
            removeDrawer={removeDrawer}
            showDrawer={showDrawer}
          />
          <Feed />
          <Rightbar />
        </Stack>
        <AddButton />
      </Box>
    </ThemeProvider>
  );
};

export default App;
