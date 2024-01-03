import React from 'react';
import styled from 'styled-components';
import {Stack, Box, Grid, Typography} from "@mui/material";
import sistern from '@images/sistern.png';
import track from '@images/track_1.png';
import cards from '@images/cards_1.png';
import baloon from '@images/baloon_1.png';

import {device, size_screen} from './device';




// const SectionSX =(theme) => ({
//     justifyContent: 'space-between',
//     [theme.breakpoints.down('sm')]: {
//         alignItems: 'center',
//         // justifyContent: 'center',
//     },
// });


// const AdvantagesSection = styled.div`
//    display: flex;
//    justify-content: space-between;
//
//    @media ${device.mobileM} {
//      flex-direction: column;
//      /* max-width: 100vw; */
//      max-width: ${size_screen.mobileM};
//
//    }
// `;

const CardSX = {
    width: '247px',
    height: '213px',
    borderRadius: '20px',
    background: 'rgba(241,241,241,.2)',
    margin: '60px 0 15px 0',
    textAlign: 'center',
};
// const AdvantagesCard = styled.div`
//     width: 247px;
//     height: 213px;
//     border-radius: 20px;
//     background: rgba(241,241,241,.2);
//     margin: 60px 0 15px 0;
//     display: flex;
//     align-items: center;
//     flex-direction: column;
// `;

// const AdvantagesCardImage = styled('img', {
//   shouldForwardProp: (prop) => prop !== 'props.margintop'})(({ margintop }) => ({
//   backgroundColor: margintop ? margintop : '-30px',
// }));




const AdvantagesCardImage = styled.img`

   margin-top: ${(props) => (props.margintop ? props.margintop : '-30px')}; 
`;

const AdvantagesCardTitle = styled.p`
    font-family: RussoOne;
    white-space: pre-wrap;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    color: var(--master-color);
    padding: 5px 0 0 0;
    margin-bottom: -5px;
    text-align: center;
    margin-top: -5px;
`;

const AdvantegesTitleSX =(theme) => ({
    // fontFamily: theme.typography.fontMaster,
    // color: theme.palette.primary.main,
    // whiteSpace: 'pre-wrap',
    // padding: '5x 0 0 0',
    // margin: '-5x 0',
    // fontSize: '20px',
    // fontWeight: '400',
    // lineHeight: '24px',

});

const AdvantagesCardSubTitle = styled.p`
    white-space: pre-wrap;
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    color: var(--slave-color);
    opacity: 0.8;
    padding: 5px 20px;
    text-align: center;
    /* margin-top: -5px; */
`;

const Advante = [
    {img: sistern,
        title: 'Экономия\nна хранилище',
        subtitle: 'за счёт собственных цистерн на нашей базе вы экономите до 10% вашего бюджета',
    },
    {img: track,
        title: 'Экономия\nна транспорте',
        subtitle: 'более 10 собственных газовозов которые экономят 5 – 7% ваших денежных средств',
    },
    {img: cards,
        title: 'Оплата удобным\nдля вас способом',
        subtitle: 'вы можете оплачивать как наличными, так и по терминалу который оборудован во все наши газовозы',
    },
    {img: baloon,
        title: 'Любые объёмы поставки качественного газа',
        subtitle: 'вы получаете объем от 1 до 20 тонн, с сертификатом качества газа',
        mtop: '-72px',
    },
];

export const AdvantagesBox = () => {
    // ========================================================================

    // =========================================================================
    return (
        <>
            <Grid container direction="row" justifyContent={{ xs: 'center', sm: 'space-between' }}>
                {
                    Advante.map((item, index) => (
                        <Grid item>
                            <Stack sx={CardSX} alignItems="center" key={index}>
                                <AdvantagesCardImage src={item.img}  margintop={item.mtop} />
                                <Typography variant="advantages_title" sx={AdvantegesTitleSX}>{item.title}</Typography>
                                <AdvantagesCardSubTitle>{item.subtitle}</AdvantagesCardSubTitle>
                            </Stack>
                        </Grid>
                    ))
                }
            </Grid>


        </>
    );

};