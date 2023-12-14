import React from 'react';
import styled from 'styled-components';

import car from '@images/car_1.png';
// import zzz from '../assets/images/car_1.png'
import button from '@images/btn_zakaz_gaz.png';
import {Typography, CardMedia, useTheme, Box} from '@mui/material';

//import {themeProxima} from '../styles/themeProxima';


import {BoxLeftSX, BoxRightSX, LeftButtonSX, SectionSX, subtitleSX, titleSX} from '../styles/hero.styled';

import { InfoGaz } from './InfoGaz';


export const HeroBox = () => {
    // ========================================================================
    // const theme = useTheme();

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
