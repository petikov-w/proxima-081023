import React, { useState } from 'react';
import styled from 'styled-components';

import {Telefon} from '@components/Telefon';

import logo from '../assets/images/logo_proxima.png';

import {Dialog2} from './Dialog2';
import {device} from './device';



const HeaderBox = styled.div`
   display: flex;   
   justify-content: space-between;
   align-items: center;
   color: var(--slave-color);
   height: 90px;
   @media ${device.mobileM} {
     flex-direction: column;    
     margin-top: 30px;
     margin-bottom: 60px;
   }
`;

const InfoBox = styled.div`
    display: flex;   
    flex-direction: column;
    align-items: flex-start;
`;

const Question = styled.span`
   font-family: OpenSans;
   font-size: 16px;
   font-weight: 600;
   color: var(--master-color);
   cursor: pointer;

   &:hover {
    text-decoration: underline;
    color: #f86a3a;
   }
`;

const numberSX = {
    fontFamily: 'var(--slave-font)',
    fontSize: '24px',
    lineHeight: '29px',
    letterSpacing: '2px',
    fontWeight: '400',
    color: 'var(--slave-color)',
    textDecoration: 'none',
    marginBottom: '5px',
    '&:hover': {
        opacity: '0.6',
    },
};

export const Header = () => {
  // ========================================================================    
  const [modalActiv, setModalActiv ] = useState(false);  

  const handleClickOpen = () => {
    setModalActiv(true);
  };

    const tel = '98916 45 512 89';
  // ========================================================================
     
    return (
        <>               
          <HeaderBox>
              <img src={logo} alt="logo" />
              <InfoBox>
                  <Telefon phone={tel} variant="telefon" />
                  {/*<Telefon phone={tel} styleNumber={numberSX} />*/}
                {/*<Telefon>+7 (495) 877-32-92</Telefon>*/}
                <Question onClick={handleClickOpen}>Есть вопросы? Задавайте.</Question>
              </InfoBox>          
          </HeaderBox>      

          <Dialog2 activ={modalActiv} setActiv={setModalActiv} />
        </>
      );

};