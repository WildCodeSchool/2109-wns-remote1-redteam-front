
import { createTheme } from '@mui/material/styles';

 const theme = createTheme({
    status: {
        success: '#7cd992',
        warning: '#f7e463',
        error: '#eb6060',
        disable: '#a8a8a8'
    },
    palette: {
        background: {
            lighter: '#0B7A75',
            darker: '#19535F'
        },
        text: {
            lighter: "#dddddd",
            darker:  '#220a00',
            custom: '0B7A75'
        },
        border: {
            lighter: "#dddddd",
            darker:  '#220a00',
            custom: '0B7A75'
        },
    },
    breakpoints: {
        values: {
          mobile: 0,
          tablet: 640,
          laptop: 1024,
          desktop: 1200,
        },
    },
});

export default theme;