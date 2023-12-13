import React from 'react';
import styled from 'styled-components';

import car from '@images/car_1.png';
// import zzz from '../assets/images/car_1.png'
import button from '@images/btn_zakaz_gaz.png';
import {Typography, CardMedia, useTheme, Box} from '@mui/material';

//import {themeProxima} from '../styles/themeProxima';

import { InfoGaz } from './InfoGaz';

import {device} from './device';





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

const HeroBoxLeft = styled.div`
    width: 44%;
    display: flex;
    flex-direction: column;

    @media ${device.mobileM} {
     //flex-direction: column;
     width: 100%;
     align-items: center;
   }
`;
const BoxLeftSX= {
    display: 'flex',
    flexDirection: 'column',
    width: {xs:'100%', md:'44%'},
    alignItems: {xs:'center', md:'left'},
    // alignItems: 'center',
};

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

const HeroBoxRight = styled.div`
    width: 54%;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media ${device.mobileM} {
     flex-direction: column;
     width: 100%;
     align-items: center;
     margin-bottom: -50px;
   }
`;



export const HeroBox = () => {
    // ========================================================================
    const theme = useTheme();
    // const breakpoints = theme.breakpoints;
    // console.log('--theme-->>>> ',theme);
    const titleSX = {
        fontWeight: 400,
        fontSize: {xs:'30px', md:'48px'},
        lineHeight: {xs:'32px', md:'46px'},
        textAlign: {xs:'center', md:'left'},
        width: {xs:'80%', md:'100%'},
    };
    const subtitleSX = {
        fontWeight: 400,
        fontSize: {xs:'16px', md:'21px'},
        lineHeight: {xs:'25px', md:'20px'},
        textAlign: {xs:'center', md:'left'},
        width: {xs:'80%', md:'100%'},
    }
    // =========================================================================
      return (
          <>
          <HeroSection>
            <Box sx={BoxLeftSX}>
              <Typography variant="text01" sx={titleSX}>
                  Качественный газ для газгольдера
              </Typography>
              <InfoGaz></InfoGaz>
              <Typography variant="text02" sx={subtitleSX}>
                  Доставка в любое время дня и ночи вне зависимости от погодных условий
              </Typography>
                <HeroBoxLeftButton component="img"
                           image={button} sx={{width: {xs: '90%', md: '80%' }}}/>
            </Box>
            <HeroBoxRight>
                <CardMedia component="img"
                           image={car}
                           sx={(theme) => ({
                               [theme.breakpoints.down('sm')]: { width: '80%' },
                           })}/>
            </HeroBoxRight>
          </HeroSection>
          </>
        );
  };
