import React from 'react';
import styled from 'styled-components';

import car from '@images/car_1.png';
// import zzz from '../assets/images/car_1.png'
import button from '@images/btn_zakaz_gaz.png';
import {Typography, CardMedia, useTheme, Box} from '@mui/material';

//import {themeProxima} from '../styles/themeProxima';

import { InfoGaz } from './InfoGaz';

import {device} from './device';


const SectionSX= {
    display: 'flex',
    flexDirection: {xs:'column', md:'row'},
    justifyContent: 'space-between',
    // marginTop: '-50px',
    marginBottom: {xs:'40px', md:'-35px'},
    alignItems: {xs:'center', md:'left'},
};

const HeroSection = styled.div`
   display: flex;
   justify-content: space-between;
   margin-bottom: -35px;

   @media ${device.mobileM} {
     flex-direction: column;
     align-items: center;
     margin-bottom: 40px;
   }
`;


const LeftButton2SX= {
    display: 'flex',
    cursor: 'pointer',
    // justifyContent: 'space-between',
    // marginBottom: {xs:'40px', md:'-35px'},
    justifyContent: {xs:'center', md:'flex-start'},
    width: {xs: '90%', md: '80%'},
};
// const LeftButtonSX= {(theme) => ({
//     [theme.breakpoints.down('sm')]: { width: '80%' },
// })};

const LeftButtonSX= (theme) => ({
    display: 'flex',
    cursor: 'pointer',
    marginBottom: '40px',
    marginTop: '40px',
    [theme.breakpoints.down('sm')]: { width: '85%' },
    [theme.breakpoints.up('sm')]: { width: '70%' },
});

const HeroBoxLeftButton = styled(CardMedia)`    
    cursor: pointer;
    width: 80%; 
    display: flex;
    align-items: flex-start;
    margin : 30px 0 ;
    &:hover {
      opacity: 0.7;
    }     
`;

// const HeroBoxLeft = styled.div`
//     width: 44%;
//     display: flex;
//     flex-direction: column;
//
//     @media ${device.mobileM} {
//      //flex-direction: column;
//      width: 100%;
//      align-items: center;
//    }
// `;
// const HeroBoxRight = styled.div`
//     width: 54%;
//     display: flex;
//     align-items: center;
//     flex-direction: column;
//     @media ${device.mobileM} {
//      flex-direction: column;
//      width: 100%;
//      align-items: center;
//      margin-bottom: -50px;
//    }
// `;



export const HeroBox = () => {
    // ========================================================================
    const theme = useTheme();
    // const breakpoints = theme.breakpoints;
    // console.log('--theme-->>>> ',theme);



    const titleSX = {
        fontWeight: 400,
        fontSize: {xs:'30px', md:'48px'},
        lineHeight: {xs:'32px', md:'50px'},
        textAlign: {xs:'center', md:'left'},
        width: {xs:'80%', md:'100%'},
        margin: 0,
    };
    const subtitleSX = {
        fontWeight: 400,
        fontSize: {xs:'16px', md:'21px'},
        lineHeight: {xs:'25px', md:'20px'},
        textAlign: {xs:'center', md:'left'},
        width: {xs:'80%', md:'100%'},
    };
    const BoxLeftSX= {
        display: 'flex',
        flexDirection: 'column',
        width: {xs:'100%', md:'44%'},
        alignItems: {xs:'center', md:'flex-start'},
        // alignItems: 'center',
    };
    const BoxRightSX= {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: {xs:'100%', md:'54%'},
        marginBottom: {xs:'-50px', md:'0'},
    };

    // =========================================================================
      return (
          <>
          <Box sx={SectionSX}>
            <Box sx={BoxLeftSX}>
              <Typography variant="text01" sx={titleSX}>
                  Качественный газ для газгольдера
              </Typography>
              <InfoGaz></InfoGaz>
              <Typography variant="text02" sx={subtitleSX}>
                  Доставка в любое время дня и ночи вне зависимости от погодных условий
              </Typography>
                <CardMedia component="img"
                           image={button}
                           sx={LeftButtonSX}/>
            </Box>
            <Box sx={BoxRightSX}>
                <CardMedia component="img"
                           image={car}
                           sx={(theme) => ({
                               [theme.breakpoints.down('sm')]: { width: '80%' },
                           })}/>
            </Box>
          </Box>
          </>
        );
  };
