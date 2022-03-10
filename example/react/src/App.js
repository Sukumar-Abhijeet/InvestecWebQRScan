

import React,{useEffect} from "react";

import "./App.css";
import Box from '@mui/material/Box';
import LOGO from './assets/logo.svg'
import { Container } from "@mui/material";
import Card from './components/Card'

// import {investec} from '@investec/app-store-sdk';

function App() {

	// useEffect(()=>{
	// 	investec.pbsa.client.get()
	// 	.then((res) => { 
	// 		console.log('res',res);
	// 	 });
	// },[])

	return (
		<Container>
		<Box height={'100vh'} display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
			
			<Box display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
				<h1 className="title">{'PAYMENT VALIDATION'}</h1>
				<h4 className="subTitle">{'Validate your payment via QR scanner'}</h4>
				
				<Card />
				<img className="img" src={LOGO} alt="logo"/>
			</Box>
			</Box>
			
		</Container>
	);
}

export default App;
