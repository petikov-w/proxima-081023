import React from 'react';
import car from '@images/car_1.png';
import button from '@images/btn_zakaz_gaz.png';
import {Typography, CardMedia, useTheme, Stack} from '@mui/material';

import {BoxLeftSX, BoxRightSX, imgCarSX, LeftButtonSX, sectionSX, subtitleSX, titleSX} from '../styles/hero.styled';

import { InfoGaz } from './InfoGaz';


export const HeroBox = () => {
    // ========================================================================
    const theme = useTheme();
    // =========================================================================
      return (
          <>
          <Stack sx={sectionSX} direction={{ xs: 'column', md: 'row' }}>
            <Stack sx={BoxLeftSX}>
              <Typography variant="text01" sx={titleSX}>
                  Качественный газ для газгольдера
              </Typography>
              <InfoGaz></InfoGaz>
              <Typography variant="text02" sx={subtitleSX}>
                  Доставка в любое время дня и ночи вне зависимости от погодных условий
              </Typography>
                <CardMedia component="img"
                           image={button}
                           sx={LeftButtonSX(theme)}/>
            </Stack>
            <Stack sx={BoxRightSX}>
                <CardMedia component="img"
                           image={car}
                           sx={imgCarSX}/>
            </Stack>
          </Stack>
          </>
        );
  };
