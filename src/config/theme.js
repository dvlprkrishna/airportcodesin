


import { createTheme } from '@mui/material';
import { green, grey, indigo } from '@mui/material/colors';

let theme = createTheme({
    palette: {
        primary: {
            main: indigo[500],
            normal: indigo['A700']
        },
        secondary: {
            main: indigo[50],
        },
        neutral: {
            light: grey[50],
            medium: grey[200],
            normal: grey[700],
            main: grey[900]
        },
        green: {
            main: green[800]
        },
        grey: {
            main: grey[800]
        },
        icon: {
            main: '#000000',
            secondary: '#454545',
            accent: '#454545'
        }
    }
})


theme = createTheme(theme, {
    typography:{
        link: {
            fontSize: '0.8rem',
            [theme.breakpoints.up('md')]: {
                fontSize: '0.9rem'
            },
            fontWeight: 500,
            color: theme.palette.primary.normal,
            display: 'block',
            cursor: 'pointer'
        },
        cardTitle: {
            fontSize: '1.2rem',
            display: 'block',
            fontWeight: 500
        },
        h6: {
            fontSize: '1rem'
        },
        h7: {
            fontSize: '0.8rem'
        },
        h8: {
            fontSize: '0.7rem'
        },
    }
});

export default theme