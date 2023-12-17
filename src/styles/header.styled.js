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