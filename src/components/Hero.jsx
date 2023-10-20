import React from 'react';
import styled from 'styled-components';

import car from '@images/car_1.png';
import button from '@images/btn_zakaz_gaz.png';

import { InfoGaz } from './InfoGaz';

import {device, size_screen} from './device';


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
     flex-direction: column;
     width: 100%;
     align-items: center;
   }
`;

const HeroBoxLeftTitle = styled.span`
    font-family: RussoOne;
    font-size: 48px;
    font-weight: 400;
    line-height: 46px;
    color: var(--master-color);;
    text-align: left;
    @media ${device.mobileM} {
     width: 80%;
     font-size: 30px;
     line-height: 32px;
     text-align: center;
   }
`;
   const HeroBoxLefSubtTitle = styled.span`
    font-family: RussoOne;
    font-size: 21px;
    font-weight: 400;
    line-height: 25px;
    color: var(--slave-color);;
    text-align: left;
    @media ${device.mobileM} {
     width: 80%;
     font-size: 16px;
     line-height: 20px;
     text-align: center;
   }  
   
`; 

const HeroBoxLeftButton = styled.img`    
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

const HeroBoxRightImage = styled.img`   
   @media ${device.mobileM} {
     width: 98%;
   }

`;


export const HeroBox = () => {
    // ========================================================================
  
    // =========================================================================
      return (
          <>        
          <HeroSection>
            <HeroBoxLeft>
              <HeroBoxLeftTitle>Качественный газ для газгольдера</HeroBoxLeftTitle>
              <InfoGaz></InfoGaz>
              <HeroBoxLefSubtTitle>Доставка в любое время дня и ночи вне зависимости от погодных условий</HeroBoxLefSubtTitle>
              <HeroBoxLeftButton src={button}></HeroBoxLeftButton>
            </HeroBoxLeft>
            <HeroBoxRight>
              <HeroBoxRightImage src={car}></HeroBoxRightImage>
            </HeroBoxRight>
          </HeroSection>       
          
          </>
        );
  
  };