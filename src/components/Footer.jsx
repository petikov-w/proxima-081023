import React from 'react';
import styled from 'styled-components';
import {useNavigate, useLocation} from 'react-router-dom';

import {Telefon} from '@components/Telefon';


import {device, size_screen} from './device';

const FooterBox = styled.div`
   display: flex;
   justify-content: flex-start;

   @media ${device.mobileM} {
     flex-direction: column;    
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
    cursor: pointer;

    &:hover {
      text-decoration: underline;
      opacity: 0.5;
    }
`;

export const Footer = () => {
  // ========================================================================
  const navigate = useNavigate();
  const location = useLocation();
  const tel = '89134551289'
  // console.log('location:>> ', location);
  // =========================================================================
    return (
        <>               
          <FooterBox>
             {location.pathname === '/policy' ? <FooterItem onClick={()=> navigate('/')}>Вернуться на главную</FooterItem>
                                     : <FooterItem onClick={()=> navigate('/policy')}>Политика конфиденциальности</FooterItem>}
             {location.pathname === '/useragreement' ? <FooterItem onClick={()=> navigate('/')}>Вернуться на главную</FooterItem>
                                     : <FooterItem onClick={()=> navigate('/useragreement')}>Пользовательское соглашение</FooterItem>}
              <Telefon phone={tel} />
          </FooterBox>
         
        </>
      );

};