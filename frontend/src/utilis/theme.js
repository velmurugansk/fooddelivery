import { createTheme } from "@mui/material";
import { appColors } from "./themecolors";

export const muitheme = createTheme({
    palette : {
        primary : {main: appColors.primary},
        secondary : {main:appColors.secondary,
            contrastText: "#333333"
        },
        background: {default: appColors.background},
        text : {primary : appColors.text,
            secondary: "#666666"
        }
    },
    typography:{
        fontFamily : "Poppins, sans-serif",
        h1: {fontWeight: 700},
        h2:{fontWeight: 600},
        body1:{fontWeight:400},
        button:{textTransform:"none", fontWeight:600}
    },
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    fontSize:"1rem"
                },
            },
        },
    },
})