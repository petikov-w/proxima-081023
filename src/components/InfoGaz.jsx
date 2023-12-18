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

  const dividerSX = (theme) => ({
      width: '0.08rem',
      height: '60px',
      opacity: '0.3',
      backgroundColor: theme.palette.secondary.main,
      margin: '5px 20px 0 0',
  });
  const infoSX = {
      display: 'flex',
  };

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
//sx={{ width: '100%', height: 3, backgroundColor: '#ffffff'}}
  export const InfoGaz = () => {
    // ========================================================================
  
    // =========================================================================
      return (
          <>        
          <Stack sx={sectionInfoSX}
                 direction="row"
                 divider={<Divider orientation="vertical" sx={dividerSX} flexItem />} >
            {
                InfoItems.map((item, index) => (

                <Stack sx={infoSX} key={index} >
                <InfoItem >
                    <InfoItemProcent>{item.procent}</InfoItemProcent>
                    <InfoItemGaz>{item.gaz}</InfoItemGaz>
                </InfoItem>

                </Stack>
                ))  
            }            
          </Stack>
          </>
        );
  
  };