import React, { useState } from "react";

import { scanFile } from "@openhealthnz-credentials/pdf-image-qr-scanner";
import ImageUploader from "../../components/FileUploader";
import TappableButton from "../../components/TappableButton";
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import { Box } from "@mui/material";
import CustomModal from "../../components/Modal";

const PdfQrScanner = () => {


	const [resultText, setResultText] = useState("");
	const [selectedFile, setSelectedFile] = useState('');
	const [visible, showIsVisible] = useState(false);

    async function processFile() {
		setResultText("");
		try {
			const qrCode = await scanFile(selectedFile);
			// It returns null if no QR code is found
			showIsVisible(true);
			setResultText(qrCode || "No QR code found");
		} catch (e) {
			// Example Error Handling
			if (e?.name === "InvalidPDFException") {
				setResultText("Invalid PDF");
			} else if (e instanceof Event) {
				setResultText("Invalid Image");
			} else {
				console.log(e);
				setResultText("Unknown error");
			}
		}
	}

	const modalProps = {
		visible,
		showIsVisible
	}
	    
    return (
		<Box sx={{
			display: "flex",
			backgroundColor:"powderblue",
			alignItems: "center",
			justifyContent: "center",
			flexDirection: "column",
			padding: "10px",
			alignSelf: "center",
			width: "400px",
			height: "500px",
			borderRadius: "6px",
			marginRight: "30px",
		}}>
			<QrCodeScannerIcon fontSize={'large'}/>
			<p className="App-header">PDF FILE  | QR IMAGE</p>
			<ImageUploader
				onFileSelectError={(err) => {
					console.log(err);
					setResultText(err.error);
				}}
				onFileSelectSuccess={(file) => {
					setSelectedFile(file);
				}}
			/>
			<TappableButton onClick={processFile}>
                {'START SCAN'}
            </TappableButton>
			<span className="Result-box">
				{resultText}
			</span>
			<CustomModal {...modalProps} />
		</Box>
	);



}

export default PdfQrScanner;