import React from 'react';
import styled from 'styled-components';

const InfoItems =  [
    {procent: '80%', gaz: 'пропана'},
    {procent: '20%', gaz: 'бутана'},
    // {procent: '5%', gaz: 'метана'},
  ];

  const InfoSection = styled.div`
    display: flex;
    margin: 35px 0;   
  `;

  const Info = styled.div`
  display: flex;
    &:not(:first-child):before {
        content: '';
        background: var(--slave-color);        
        opacity: 0.3;
        width: 0.1rem;
        height: 80%;           
        margin: 10px 20px 0px 0px;
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
          <InfoSection>
            {
                InfoItems.map((item, index) => (
                <Info key={index}>
                <InfoItem >
                    <InfoItemProcent>{item.procent}</InfoItemProcent>
                    <InfoItemGaz>{item.gaz}</InfoItemGaz>
                </InfoItem>
                </Info>
                ))  
            }            
          </InfoSection>        
          </>
        );
  
  };