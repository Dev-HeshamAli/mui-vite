import { Box } from "@mui/material";
import Post from "./Post";

const Feed = () => {
  return (
    <Box flex={5} position="static">
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
