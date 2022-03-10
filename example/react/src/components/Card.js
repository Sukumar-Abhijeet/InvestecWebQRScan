import React from 'react';
import QRIcon from '../assets/QRCode.svg';
import CameraScanner from '../Scanners/Camera_Scanner';
import PdfQrScanner from '../Scanners/Pdf_Qr_Scanner';

const Card = () => {
    return (
        <div className='card'>
            <img className='cardLogo' src={QRIcon} alt="QRIcon" />  
            <p className='cardTitle'>{'Supports  .pdf, .png, .jpeg'}</p> 
            <PdfQrScanner />
            <p className='cardSecondaryText'>OR</p>
            <CameraScanner />
        </div>
    );
};

export default Card;