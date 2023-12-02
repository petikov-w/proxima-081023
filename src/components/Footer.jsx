import React from 'react';
import styled from 'styled-components';
import {useNavigate, useLocation} from 'react-router-dom';

import {device} from './device';

const FooterBox = styled.div`
   display: flex;
   justify-content: flex-start;

   @media ${device.mobileM} {
     flex-direction: column;    
     align-items: center;
   }
`;

const FooterItem = styled.span`
    font-family: OpenSans, serif;
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

  // =========================================================================
    return (
        <>               
          <FooterBox>
             {location.pathname === '/policy' ? <FooterItem onClick={()=> navigate('/')}>Вернуться на главную</FooterItem>
                                     : <FooterItem onClick={()=> navigate('/policy')}>Политика конфиденциальности</FooterItem>}
             {location.pathname === '/useragreement' ? <FooterItem onClick={()=> navigate('/')}>Вернуться на главную</FooterItem>
                                     : <FooterItem onClick={()=> navigate('/useragreement')}>Пользовательское соглашение</FooterItem>}
          </FooterBox>
         
        </>
      );

};