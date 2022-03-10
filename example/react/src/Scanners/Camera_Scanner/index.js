import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { Button} from '@mui/material';
import CustomModal from '../../components/Modal';

const CameraScanner = () => {
    const [startScan, setStartScan] = useState(false);
    const [qrResult, setQrResult] = useState(null);
    const [visible, showIsVisible] = useState(false);
    const [cameraModal, setCameraModal] = useState(false);

    const scanControlling = () => {
      setStartScan(!startScan)
      setQrResult('');
    }

    const validateResult = (result) => {
      setStartScan(false);
      showIsVisible(true);
      setQrResult(result);
    }

    const modalProps = {
      visible,
      showIsVisible
    }

    const cameraModalProps = {
      visible : cameraModal,
      showIsVisible : setCameraModal,
      hideAll : true,
      title : 'Camera QR Detection'
    }

    return (
      <>
      <CustomModal {...cameraModalProps}>
        <div className='card'>
            {
              startScan && 
                <div style={{width: 400,height:400}}>
                  <QrReader
                      scanDelay={2000}
                      onResult={(result, error) => {
                          if (!!result) validateResult(result)
                      }}
                      style={{ width: '400px', height: '400px' }}
                  />
              </div>
            }
            <p className="App-header">CAMERA</p>
            <Button onClick={scanControlling} className='secondaryBtn'>
            {startScan ? 'Stop Scan' : 'Start Scan'}
            </Button>
            {/* <span className="Result-box">
				    {qrResult ? qrResult.text : ''}
			      </span> */}
            <CustomModal {...modalProps} />
        </div>
        </CustomModal>
        <Button onClick={()=>setCameraModal(true)} className='primaryBtn'>
                {'Open camera'}
        </Button>
        </>
    );
};

export default CameraScanner;