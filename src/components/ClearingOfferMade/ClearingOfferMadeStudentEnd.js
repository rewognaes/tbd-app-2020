import React from "react";
import TextBox from "../../components/TextBox/TextBox";
import "./ClearingOfferMade.css";
import { Container, Col, Row } from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";


function ClearingOfferMadeStudentEnd() {
	function autoInputData() {
    	if (global.ApplicationFormData.email !== "") {
    		let email = document.getElementById("emailConfirm");
    		email.value = global.ApplicationFormData.email;
    	}
		
    	if (global.ApplicationFormData.selectedCourse !== "") {
    		let course = document.getElementById("courseApplied");
    		course.value = global.ApplicationFormData.email;
    	}
	}

	function downloadFile() {
    	const fileName = "studentDetails.json"; 
    	let saveData = (function () { 
    		let a = document.createElement("a"); 
    		document.body.appendChild(a); 
    		a.style = "display: none"; 
    		return function (fileName) { 
    			let json = JSON.stringify(global.ApplicationFormData), 
    				blob = new Blob([json], {type: "octet/stream"}), 
    				url = window.URL.createObjectURL(blob); 
    			a.href = url; 
    			a.download = fileName; 
    			a.click(); 
    			window.URL.revokeObjectURL(url); 
    		}; 
    	}()); 
    	saveData(fileName);
	}

	return (<Container>
		<h1>Thank you for using the form</h1>
		<p>Please press confirm to complete</p>
		<h3>Please confirm email that your application will be sent to</h3>
		<TextBox id="emailConfirm" placeholder={global.ApplicationFormData.email}/>

		<Row>
			<Col><br></br><UCPButton to='/DegreeQualifications'
				primary="True"
				className="mediumbutton"
				buttonText="Go Back"
				href="/DegreeQualifications"/>
			</Col>

			<Col>
				<br></br>
				<div onClick={downloadFile}>
					<UCPButton to ='/'
						primary="True"
						className="mediumbutton"
						buttonText="Confirm"
						href="/"/>
				</div>
			</Col>
		</Row>
		{autoInputData}
	</Container>
	);
}

export default ClearingOfferMadeStudentEnd;