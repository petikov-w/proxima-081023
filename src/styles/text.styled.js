import styled from 'styled-components';

export const Title = styled.div`
    font-family: RussoOne;
    font-size: 36px;
    font-weight: 400;
    color: var(--master-color);;
    text-align: left;   
    margin-bottom: 30px;
`;

export const Heading = styled.div`    
    color: var(--slave-color);
    opacity: 0.5;
    font-size: 20px;
    font-weight: 600;
    padding-bottom: 20px;
`;

export const TextBox = styled.div`
    color: var(--slave-color);
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    padding-bottom: 20px;
    padding-left: 30px;
    text-align: justify;    
`;

export const TextBox1lvl = styled(TextBox)`
    padding-left: 30px;
`;

export const TextBox2lvl = styled(TextBox)`
    padding-left: 60px;
`;

export const TextBox3lvl = styled(TextBox)`
    padding-left: 90px;
`;

export const Item = styled.span`
    color: var(--slave-color);
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    opacity: 0.5;
    padding-right: 20px;
`;