import React from 'react';
import styled from 'styled-components';
import {Divider, Stack, Typography} from '@mui/material';

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
      opacity: 0.6,
      backgroundColor: theme.palette.secondary.main,
      margin: '5px 20px 0 0',
  });
  const itemInfoSX = (theme) => ({
      color: theme.palette.secondary.main,
      fontFamily: theme.typography.fontMaster,
      opacity: 0.6,
      marginRight: '20px',
  });

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
          <Stack sx={sectionInfoSX}
                 direction="row"
                 divider={<Divider orientation="vertical" sx={dividerSX} flexItem />} >
            {
                InfoItems.map((item, index) => (
                    <Stack key={index} sx={itemInfoSX} >
                        {/*<Stack sx={itemInfoSX} >*/}
                        <Stack >
                            {/*<InfoItemProcent>{item.procent}</InfoItemProcent>*/}
                            {/*<InfoItemGaz>{item.gaz}</InfoItemGaz>*/}
                            <Typography variant="info_procent">{item.procent}</Typography>
                            <Typography variant="info_gaz">{item.gaz}</Typography>
                        </Stack>
                    </Stack>
                ))  
            }            
          </Stack>
          </>
        );
  
  };