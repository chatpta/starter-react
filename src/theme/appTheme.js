import createTheme from "@material-ui/core/styles/createTheme";


import { blueGrey, deepOrange, orange, green } from "@material-ui/core/colors";

const appTheme = createTheme( {
    palette: {
        primary: { main: blueGrey[ 900 ] },
        secondary: { main: deepOrange[ 500 ] },
        emphasis: { main: orange[ 500 ] },
        cool: { main: green[ 700 ] },
        background: { main: "#faecd9" }
    },
    dimensions: {
        fullWidth: "1200px",
        mediumWidth: "900px",
        smallWidth: "600px",
    },
} );

export default appTheme;
