import React from 'react';
import styled from 'styled-components';
import {Divider, Stack} from '@mui/material';

const InfoItems =  [
    {procent: '80%', gaz: 'пропана'},
    {procent: '20%', gaz: 'бутана'},
    // {procent: '5%', gaz: 'метана'},
  ];


  const sectionInfoSX = {
      margin: '35px 0',
  };

  const infoSX = {
      // '&:not(:first-child):before': {
      //     content: "''",
      //     background: 'var(--slave-color)',
      //     opacity: '0.3',
      //     width: '0.1rem',
      //     height: '80%',
      //     margin: '10px 20px 0 0',
      //     },
  };


  const Info = styled.div`
  display: flex;
    &:not(:first-child):before {
        content: '';
        background: var(--slave-color);        
        opacity: 0.3;
        width: 0.1rem;
        height: 80%;           
        margin: 10px 20px 0 0;
    }
  `;

  const InfoItem  = styled.div`
    display: flex;
    flex-direction: column;    
    font-family: RussoOne;
    color: var(--slave-color);
    opacity: 0.6;
    margin-right: 20px;
 
`;

const InfoItemProcent = styled.span`
     font-size: 36px;
     
`; 
const InfoItemGaz = styled.span`
    font-size: 18px;
`; 

  export const InfoGaz = () => {
    // ========================================================================
  
    // =========================================================================
      return (
          <>        
          <Stack sx={sectionInfoSX} direction="row">
            {
                InfoItems.map((item, index) => (
                // <Info key={index}>
                <Stack sx={infoSX} key={index} divider={<Divider orientation="vertical" flexItem />}>
                <InfoItem >
                    <InfoItemProcent>{item.procent}</InfoItemProcent>
                    <InfoItemGaz>{item.gaz}</InfoItemGaz>
                </InfoItem>
                 {/*<Divider orientation="vertical" variant="middle" flexItem />*/}
                </Stack>
                ))  
            }            
          </Stack>
          </>
        );
  
  };