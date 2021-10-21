import React from "react";
import TextBox from "../TextBox/TextBox";
import "./ClearingOfferMade.css";
import { Container, Col, Row } from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";

import Headers from '../Header/Headers';
import Footer from '../Footer/Footer';

function ClearingOfferMadeReasonIfNo() {
	return (
		<div>
			<Headers/>
			<Container>
				<p>Required</p>
				<h1>Not Offered Details</h1>
				<h3>38. If NO, please state reasons:</h3>
				<TextBox/>
				<Row>
					<Col>
						<br/>
						<UCPButton 
							to='/ClearingOfferMadeSecondPage'
							primary="True"
							className="mediumbutton"
							buttonText="Go Back"
							href="/ClearingOfferMadeSecondPage"
						/>
					</Col>
					<Col>
						<br/>
						<UCPButton 
							to='/ClearingOfferMadeFifthPage'
							primary="True"
							className="mediumbutton"
							buttonText="Confirm and Continue"
							href="/ClearingOfferMadeFourthPage"
						/>
					</Col>
				</Row>
			</Container>
			<Footer/>
		</div>
	);
}

export default ClearingOfferMadeReasonIfNo;