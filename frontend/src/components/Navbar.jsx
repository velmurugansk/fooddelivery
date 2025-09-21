import { AppBar, Box, Typography, Button } from "@mui/material";

function Navbar() {
  return (
    <AppBar color="primary" position="static" className="px-8 py-4">
        <Box className="flex items-center justify-between">
            <Typography variant="h5">Foodie</Typography>
            <Box>
                <Button color="secondary" variant="text">Login</Button>
            </Box>
        </Box>
    </AppBar>
  );
}

export default Navbar;
