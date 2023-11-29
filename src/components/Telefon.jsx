import React from 'react';
//import styled from 'styled-components';

export const Telefon = (props) => {
    // ========================================================================
    const {phone} = props
    const PhoneNumberFormat = (phone) => {
        let temp_number;
        let pref;
        temp_number = `${phone}`;
        if (temp_number[0] == '8') {
            pref = temp_number.substr(0, 1)}
        if (temp_number[0] == '7') {
            pref = '+' + temp_number.substr(0, 1)
        }
        temp_number = temp_number.substr(-10);
        return `${pref} (${temp_number.substr(0, 3)})
                ${temp_number.substr(3, 3)}-${temp_number.substr(6, 2)}
                -${temp_number.substr(8, 2)}`;
    };

    const PhoneNumberLink = (phone) => {
        let temp_number;
        let pref;
        temp_number = `${phone}`;
        if (temp_number[0] == '8') {
            pref = temp_number.substr(0, 1);
        }
        if (temp_number[0] == '7') {
            pref = '+' + temp_number.substr(0, 1);
        }
        // temp_number = temp_number.substr(-10);
        return `${pref}${temp_number.substr(-10)}`;
    };
    const telas = `tel:${PhoneNumberLink(phone)}`;
    // ========================================================================
    return (
        <>
        {/*<span>{PhoneNumberFormat(phone)}</span>*/}
            <a href = {telas} >{ PhoneNumberFormat(phone) }</a>
        </>
    );

};



