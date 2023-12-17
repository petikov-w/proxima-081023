export const logoSX = {
    width: 'auto',
};

export const infoBox = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
};


export const numberSX = (theme) => ({
    color: theme.palette.secondary.main,
    fontFamily: theme.typography.fontMaster,
    fontSize: '24px',
    lineHeight: '29px',
    letterSpacing: '2px',
    fontWeight: '400',
    textDecoration: 'none',
    marginBottom: '5px',
    '&:hover': {
        opacity: '0.6',
    },
});

export const headerSX =(theme) => ({
    height: '90px',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        marginTop: '30px',
        marginBottom: '60px',
    },
});

export const infoSX =(theme) => ({
    alignItems: 'flex-start',
    [theme.breakpoints.down('sm')]: {
        alignItems: 'center',
        marginTop: '15px',
    },
});

export const questionSX =(theme) => ({
    color: theme.palette.primary.main,
    fontFamily: theme.typography.fontSlave,
    fontSize: '16px',
    alignItems: 'flex-start',
    '&:hover': {
        textDecoration: 'underline',
    },
    [theme.breakpoints.down('sm')]: {
        alignItems: 'center',
        marginTop: '15px',
    },
});