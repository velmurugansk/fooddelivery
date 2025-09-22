import { AppBar, Box, Typography, Drawer, List, ListItem, ListItemButton, ListItemText, Divider } from "@mui/material";
import Custombtn from "../common/Custombtn";
import {Menu} from "lucide-react"
import { useState } from "react";

function Navbar() {
  const [isopen, setIsopen] = useState(false);
  const toggleDrawer = (state) => {
    setIsopen(state)
  }
  return (
    <AppBar color="primary" position="static" className="px-8 py-4">
        <Box className="flex items-center justify-between">
            <div className="flex items-center">
              <Menu className="mr-2 md:hidden" onClick={()=> setIsopen(true)} />
              <Drawer open={isopen} onClose={() => toggleDrawer(false)}>
                <Typography>Hello Drawer</Typography>
              </Drawer>
              <Typography variant="h5">Foodie</Typography>
            </div>            
            <div className="hidden md:block">
                <Custombtn color="secondary" variant="text" text="Sign in" />
                <Custombtn color="secondary" variant="text" text="Login" />                
            </div>
        </Box>        
    </AppBar>
  );
}

export default Navbar;
