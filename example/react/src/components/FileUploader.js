import React, { useRef, useState } from "react";
import { Button, Input } from "@mui/material";
import { Box } from "@mui/system";


/**
 * ImageUploader Success callback.
 *
 * @callback onFileSelectSuccess
 * @param {File} file - The image file.
 */

/**
 * ImageUploader Error callback.
 *
 * @callback onFileSelectError
 * @param {object} error - Error Object.
 * @param {string} error.error - Error Message.
 */

/**
 * ImageUploader
 * @param {object} props ImageUploader Props.
 * @param {onFileSelectSuccess} props.onFileSelectSuccess Success Handler.
 * @param {onFileSelectError} props.onFileSelectError The email of the user.
 */
export default function ImageUploader({ onFileSelectSuccess, onFileSelectError }) {
	// MIME Types to allow for upload.
	const supportedFiles = ["application/pdf", "image/png", "image/jpeg"];
	// Splitting the end of the string to get the file extension is not the best way to do this.
	// Will break for MIME's like SVG 'image/svg+xml'.
	const supportedFileEnds = supportedFiles.map((file) => file.split("/")[1]).join(", ");

	const [fileName, setFileName] = useState("");

	/**
	 *
	 * @param {React.ChangeEvent<HTMLInputElement>} e
	 */
	const handleFileInput = (e) => {
		// Makes sure it's the correct file type.
		const file = e.target.files[0];
		if (supportedFiles.includes(file.type)) {
			setFileName(file.name);
			onFileSelectSuccess(file);
		} else {
			onFileSelectError({ error: "File must be a PDF/Image" });
		}
	};

	return (
		<Box component="label"  sx={{ display: 'block', width: '100%' }} htmlFor="contained-button-file">
			<Input
				id="contained-button-file"
				onChange={handleFileInput}
				accept={supportedFiles.join(",")}
				type="file"
				sx={{ display: 'none' }}
			/>
			<Button className='secondaryBtn' component="span" fullWidth>
				{'Upload a FILE'}
			</Button>
		</Box>
			
	);
}
