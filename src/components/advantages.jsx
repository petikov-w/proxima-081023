import React from 'react';
import styled from 'styled-components';

import sistern from '../assets/images/sistern.png';
import track from '../assets/images/track_1.png';
import cards from '../assets/images/cards_1.png';
import baloon from '../assets/images/baloon_1.png';

import {device, size_screen} from './device';



const AdvantagesSection = styled.div`
   display: flex;
   justify-content: space-between;

   @media ${device.mobileM} {
     flex-direction: column;
     width: ${size_screen.mobileM};
     align-items: center;
   }
`;

const AdvantagesCard = styled.div`
    width: 247px;
    height: 213px;
    border-radius: 20px;
    background: rgba(241,241,241,.2);
    margin: 60px 0 15px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const AdvantagesCardImage = styled.img`
   /* color: ${props => props.srcImage};  */
   margin-top: -30px;
`;

const AdvantagesCardTitle = styled.p`
    font-family: RussoOne;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    color: var(--master-color);
    padding: 5px 0 15px 0;
    text-align: center;
    margin-top: -5px;

`;

export const AdvantagesBox = () => {
  // ========================================================================
  // =========================================================================
    return (
        <>               
          <AdvantagesSection>
            <AdvantagesCard >
                <AdvantagesCardImage src={sistern} />
                <AdvantagesCardTitle>Экономия на хранилище</AdvantagesCardTitle>
            </AdvantagesCard>
            <AdvantagesCard >
                <AdvantagesCardImage src={track} />
                <AdvantagesCardTitle>Экономия на транспорте</AdvantagesCardTitle>
            </AdvantagesCard>
            <AdvantagesCard >
                <AdvantagesCardImage src={cards} />
                <AdvantagesCardTitle>Оплата удобным <span>{<br/>}</span> для вас способом</AdvantagesCardTitle>
            </AdvantagesCard>
            <AdvantagesCard >
                <AdvantagesCardImage src={baloon} />
                <AdvantagesCardTitle>Любые объёмы поставки качественного газа</AdvantagesCardTitle>
            </AdvantagesCard>
            
          </AdvantagesSection>         
        </>
      );

};