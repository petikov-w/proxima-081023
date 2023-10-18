import React from 'react';
import styled from 'styled-components';

import {device, size_screen} from './device';

const FooterBox = styled.div`
   display: flex;
   justify-content: flex-start;

   @media ${device.mobileM} {
     flex-direction: column;
     /* max-width: 100vw; */
     max-width: ${size_screen.mobileM};
     align-items: center;
   }
`;

const FooterItem = styled.span`
    font-family: OpenSans;
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    color: var(--slave-color);
    margin-right: 30px;

    &:hover {
      text-decoration: underline;
    }
`;

export const Footer = () => {
  // ========================================================================
  // =========================================================================
    return (
        <>               
          <FooterBox>
             <FooterItem>Политика конфиденциальности</FooterItem>
             <FooterItem>Пользовательское соглашение</FooterItem>
          </FooterBox>
         
        </>
      );

};