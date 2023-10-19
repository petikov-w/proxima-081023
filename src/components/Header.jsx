import React from 'react';
import styled from 'styled-components';

import logo from '../assets/images/logo_proxima.png';

import {device, size_screen} from './device';


const HeaderBox = styled.div`
   display: flex;   
   justify-content: space-between;
   align-items: center;
   color: var(--slave-color);
   height: 90px;

   @media ${device.mobileM} {
     flex-direction: column;    
   }
`;

const InfoBox = styled.div`
    display: flex;   
    flex-direction: column;
    align-items: flex-start;
`;

const Telefon = styled.span`
   font-family: RussoOne;
   font-size: 24px;
   font-weight: 400;
   color: var(--slave-color); 
   margin-bottom: 5px;
`; 

const Question = styled.span`
   font-family: OpenSans;
   font-size: 16px;
   font-weight: 600;
   color: var(--master-color);

   &:hover {
    text-decoration: underline;
   }
`;
   


export const Header = () => {
  // ========================================================================    
  // ========================================================================
    
    return (
        <>               
          <HeaderBox>
              <img src={logo} alt="logo" />
              <InfoBox>
                <Telefon>+7 (495) 877-32-92</Telefon>
                <Question>Есть вопросы? Задавайте.</Question>
              </InfoBox>
              
          </HeaderBox>         
        </>
      );

};