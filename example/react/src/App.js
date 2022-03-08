

import React from "react";

import "./App.css";
import CameraScanner from "./Scanners/Camera_Scanner";
import PdfQrScanner from "./Scanners/Pdf_Qr_Scanner";
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";

function App() {
	return (
		<Box sx={{
			textAlign: 'center',
			backgroundColor: '#282c34',
			minHeight: '100vh',
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			color: 'white',
		}}>
		<Box>
			<Grid container spacing={2}>
				<Grid sm={6} md={6} xs={12} item>
					<PdfQrScanner />
				</Grid>
				<Grid sm={6} md={6} xs={12} item>
					<CameraScanner />
				</Grid>
				
			</Grid>
		</Box>

			
			
		</Box>
	);
}

export default App;
