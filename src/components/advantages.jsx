import React from 'react';
import styled from 'styled-components';

import sistern from '../assets/images/sistern.png';

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
   color: ${props => props.srcImage}; 
   margin-top: -30px;
`;

export const AdvantagesBox = () => {
  // ========================================================================
  // =========================================================================
    return (
        <>               
          <AdvantagesSection>
            <AdvantagesCard >
                <AdvantagesCardImage srcImage={sistern} />
            </AdvantagesCard>
            <AdvantagesCard />
            <AdvantagesCard />
            <AdvantagesCard />
          </AdvantagesSection>         
        </>
      );

};