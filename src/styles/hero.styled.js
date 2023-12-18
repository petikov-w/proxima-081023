export const sectionSX= {
    justifyContent: 'space-between',
    marginBottom: {xs:'40px', md:'-35px'},
    alignItems: {xs:'center', md:'left'},
};

export const titleSX = {
    fontWeight: 400,
    fontSize: {xs:'30px', md:'48px'},
    lineHeight: {xs:'32px', md:'50px'},
    textAlign: {xs:'center', md:'left'},
    width: {xs:'80%', md:'100%'},
    margin: 0,
};
export const subtitleSX = {
    fontWeight: 400,
    fontSize: {xs:'16px', md:'21px'},
    lineHeight: {xs:'25px', md:'20px'},
    textAlign: {xs:'center', md:'left'},
    width: {xs:'80%', md:'100%'},
};
export const BoxLeftSX= {
    width: {xs:'100%', md:'44%'},
    alignItems: {xs:'center', md:'flex-start'},
};
export const BoxRightSX= {
    alignItems: 'center',
    width: {xs:'100%', md:'54%'},
    marginBottom: {xs:'-50px', md:'0'},
};
export const LeftButtonSX= (theme) => ({
    display: 'flex',
    cursor: 'pointer',
    marginBottom: '40px',
    marginTop: '40px',
    '&:hover': {
        opacity: '0.6',
    },
    [theme.breakpoints.down('sm')]: { width: '85%' },
    [theme.breakpoints.up('sm')]: { width: '70%' },
});

export const imgCarSX =(theme) => ({
         [theme.breakpoints.down('sm')]: { width: '80%' },
    });
