import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import CustomModal from '../../components/Modal';
import TappableButton from '../../components/TappableButton';

const CameraScanner = () => {
    const [startScan, setStartScan] = useState(false);
    const [qrResult, setQrResult] = useState(null);
    const [visible, showIsVisible] = useState(false);

    const scanControlling = () => {
      setStartScan(!startScan)
      setQrResult('');
    }

    const modalProps = {
      visible,
      showIsVisible
    }

    return (
        <div className='card'>
            {
              startScan && 
                <div style={{width: 400,height:400}}>
                  <QrReader
                      scanDelay={2000}
                      onResult={(result, error) => {
                          if (!!result) {
                            setStartScan(false);
                            showIsVisible(true);
                            setQrResult(result);
                          }
                      }}
                      style={{ width: '400px', height: '400px' }}
                  />
              </div>
            }
            <p className="App-header">CAMERA</p>
            <TappableButton onClick={scanControlling}>
                {startScan ? 'Stop Camera Scan' : 'Start Camera Scan'}
            </TappableButton>
            <span className="Result-box">
				    {qrResult ? qrResult.text : ''}
			      </span>
            <CustomModal {...modalProps} />
        </div>

    );
};

export default CameraScanner;