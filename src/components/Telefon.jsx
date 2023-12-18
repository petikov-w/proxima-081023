import React from 'react';
import { Link } from '@mui/material';

export const Telefon = (props) => {

    // ========================================================================
    const {phone, styleNumber} = props;

    const PhoneNumberFormat = (phone) => {
        const temp_number = `${phone}`.replace(/[-+()\s]/g, '');
        const pref = temp_number.slice(0,-10) === '8' ? '+7' : `+${temp_number.slice(0,-10)}`;
        const numbers = temp_number.slice(-10);
    return `${pref} (${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 8)}-${numbers.slice(8, 10)}`;
    };

    const PhoneNumberLink = (phone) => {
        return `${PhoneNumberFormat(phone)}`.replace(/[-()\s]/g, '');
    };
    // ========================================================================

    return (
        <>
            <Link href = {`tel:${PhoneNumberLink(phone)}`} sx={styleNumber}>{ PhoneNumberFormat(phone) }</Link>
        </>
    );

};

