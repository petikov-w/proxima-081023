import React from 'react';
import styled from 'styled-components';

import sistern from '@images/sistern.png';

import {device, size_screen} from './device';

const HeroSection = styled.div`
   display: flex;
   justify-content: space-between;

   @media ${device.mobileM} {
     flex-direction: column;
     width: ${size_screen.mobileM};
     align-items: center;
   }
`;

const HeroBoxLeft = styled.div`
    width: 48%;
    height: 213px;
    border-radius: 20px;
    background: rgba(241,241,241,.2);
    margin: 60px 0 15px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const HeroBoxRight = styled.div`
    width: 48%;
    height: 213px;
    border-radius: 20px;
    background: rgba(241,241,241,.2);
    margin: 60px 0 15px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
`;


export const HeroBox = () => {
    // ========================================================================
  
    // =========================================================================
      return (
          <>        
          <HeroSection>
            <HeroBoxLeft></HeroBoxLeft>
            <HeroBoxRight></HeroBoxRight>
          </HeroSection>       
          
          </>
        );
  
  };