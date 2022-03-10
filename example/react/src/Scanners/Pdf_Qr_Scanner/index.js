import React, { useState } from "react";

import { scanFile } from "@openhealthnz-credentials/pdf-image-qr-scanner";
import ImageUploader from "../../components/FileUploader";
import CustomModal from "../../components/Modal";

const PdfQrScanner = () => {
	const [resultText, setResultText] = useState("");
	const [selectedFile, setSelectedFile] = useState('');
	const [visible, showIsVisible] = useState(false);

    async function processFile() {
		setResultText("");
		try {
			const qrCode = await scanFile(selectedFile);
			showIsVisible(true);
			setResultText(qrCode || "No QR code found");
		} catch (e) {
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
		showIsVisible,
	}
	    
    return (
		<>
			<ImageUploader
				onFileSelectError={(err) => {
					console.log('onFileSelectError',err);
					setResultText(err.error);
				}}
				onFileSelectSuccess={(file) => {
					console.log('onFileSelectSuccess',file);
					setSelectedFile(file);
					processFile(file);
				}}
			/>
			{/* <span className="Result-box">
				{resultText}
			</span> */}
			<CustomModal {...modalProps} />
		</>
	);
}

export default PdfQrScanner;