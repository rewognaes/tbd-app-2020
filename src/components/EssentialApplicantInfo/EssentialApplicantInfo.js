import React, {useState} from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import TextBox from "../TextBox/TextBox";
import RadioButton from "../RadioButton/RadioButton";
import "./EssentialApplicantInfo.css";
import { Container, Row, Col } from "react-bootstrap";
import UCPButton from "../Buttons/UCPButton";
import Modal from "../Modal/Modal";
import {isMobile} from 'react-device-detect';

const time = [
	{value: 'morning', label: '09:00am - 12:00pm'},
	{value: 'afternoon', label: '12:00pm - 15:00pm'},
	{value: 'evening', label: '15:00pm - 17:00pm'}
];

const days = [
	{value: 'monday', label: 'Monday'},
	{value: 'tuesday', label: 'Tuesday'},
	{value: 'wednesday', label: 'Wednesday'},
	{value: 'thursday', label: 'Thursday'},
	{value: 'friday', label: 'Friday'}
];

function EssentialApplicantInfo({disabled, ...props}) {
	const [nameInput, setNameInput] = useState("");
	const [emailInput, setEmailInput] = useState("");
	const [telInput, setTelInput] = useState("");
	const [dobInput, setDobInput] = useState("");
	const [ucasInput, setUcasInput] = useState("");
	//I refuse to copypaste 10 state setting things.
	const [nationalityState, setNationalityState] = useState({
		value: "",
		anyChecked: false,
	});
	const [criminalConvState, setCriminalConvState] = useState({
		value: "",
		anyChecked: false,
	});
	const [supportState, setSupportState] = useState({
		value: "",
		anyChecked: false,
	});
	const [selectedCourse, setSelectedCourse] = useState("");

	const disabledInputs = disabled ? "disabled" : null;
	const textboxClassName = isMobile ? "mobiletextbox" : "desktoptextbox";

	function anyNationalityChecked(e) {
		setNationalityState({
			value: e.target.value,
			anyChecked: true,
		});
	}

	function anyCriminalConvChecked(e) {
		setCriminalConvState({
			value: e.target.value,
			anyChecked: true,
		});	
	}

	function anySupportChecked(e) {
		setSupportState({
			value: e.target.value,
			anyChecked: true,
		});	
	}

	const nationalityOptions = [
		{ label: "UK National", id: "UK", value: "UK", handleChange: anyNationalityChecked },
		{ label: "EU National", id: "EU", value: "EU", handleChange: anyNationalityChecked },
		{ label: "Other", id: "Other", value: "Other", handleChange: anyNationalityChecked },
	];
	const criminalOptions = [
		{ label: "Yes", id: "crimeYes", value: "yes", handleChange: anyCriminalConvChecked },
		{ label: "No", id: "crimeNo", value: "no", handleChange: anyCriminalConvChecked },
	];
	const supportOptions = [
		{ label: "Yes", id: "supportYes", value: "yes", handleChange: anySupportChecked },
		{ label: "No", id: "supportNo", value: "no", handleChange: anySupportChecked },
	];

	function saveSelectedData() {
		global.ApplicationFormData.name = nameInput;
		global.ApplicationFormData.email = emailInput;
		global.ApplicationFormData.telephone = telInput;
		global.ApplicationFormData.dob = dobInput;
		global.ApplicationFormData.ucasNumber = ucasInput;

		// get Nationality
		if (nationalityState.anyChecked) {
			global.ApplicationFormData.Nationality = nationalityState.value;
		}

		// Criminal Conviction
		if (criminalConvState.anyChecked) {
			global.ApplicationFormData.Convictions = criminalConvState.value;
		}

		// Learning Support
		if (supportState.anyChecked) {
			global.ApplicationFormData.Support = supportState.value;
		}

		global.ApplicationFormData.selectedCourse = selectedCourse;
		//
		console.log(global.ApplicationFormData);
	}

	function userTypeSelect() {
		if (global.userType === "staff") {
			return (
				<Row id="buttonRow">
					<Col className="centered-buttons">
						<UCPButton 
							to="/Login"
							primary="True"
							className="mediumbutton"
							buttonText="Go Back"
						/>
					</Col>
					<Col className="centered-buttons">
						<div id="confirmButton" onClick={saveSelectedData}>
							<UCPButton 
								to="/MoreInfo"
								primary="True"
								className="mediumbutton"
								buttonText="Confirm and Go"
							/>
						</div>
					</Col>
				</Row>
			);
		} else {
			return (
				<Row id="buttonRow">
					<Col className="centered-buttons">
						<div id="confirmButton1">
							<Modal id="hello" btnText="Request a Call Back">
								<div>
									<h2>Callback Request</h2>
									<p>Please select a day and time you would be available.</p>
									<Row id="dropdownRow">
										<Col className="dropdownOptions1">
											<DropdownMenu placeholder="Please select a day..." options={days}/>
										</Col>
										<Col className="dropdownOptions2">
											<DropdownMenu placeholder="Please select a time..." options={time}/>
										</Col>
									</Row>
									<br></br>
									<UCPButton 
										to="none"
										primary="True"
										className="smallbutton"
										buttonText="Submit" 
									/>
								</div>
							</Modal>
						</div>
					</Col>
					<Col className="centered-buttons">
						<div id="confirmButton" onClick={saveSelectedData}>
							<UCPButton
								to="/MoreInfo"
								primary="True"
								className="mediumbutton"
								buttonText="Apply Now"
							/>
						</div>
					</Col>
				</Row>
			);
		}
	}

  	return (
  		<Container className="es-form-container">
  			<div className="es-form-background">
  				<h3 className="form-title">CLEARING APPLICATION</h3>
  				<span className="ess-form-left">
  					<TextBox
  						title="Name"
  						placeholder="Enter your name"
  						minLength={5}
  						maxLength={60}
  						id="nameinput"
  						type="text"
  						name="name"
  						attribute={disabledInputs}
  						className={textboxClassName}
  						onChange={(e) => setNameInput(e.target.value)}
  						value={nameInput}
  					/>
  					<TextBox
  						title="Email"
  						placeholder="Enter your email"
  						minLength={5}
  						maxLength={60}
  						id="emailinput"
  						type="email"
  						name="email"
  						attribute={disabledInputs}
  						className={textboxClassName}
  						onChange={(e) => setEmailInput(e.target.value)}
  						value={nameInput}
  					/>
  					<TextBox
  						title="Tel No"
  						placeholder="Enter phone number"
  						minLength={5}
  						maxLength={12}
  						id="telinput"
  						type="tel"
  						name="telno"
  						attribute={disabledInputs}
  						className={textboxClassName}
  						onChange={(e) => setTelInput(e.target.value)}
  						value={nameInput}
  					/>
  					<TextBox
  						title="D/O/B"
  						placeholder="Enter date of birth"
  						id="dobinput"
  						type="date"
  						name="dob"
  						attribute={disabledInputs}
  						className={textboxClassName}
  						onChange={(e) => setDobInput(e.target.value)}
  						value={nameInput}
  					/>
  					<TextBox
  						title="UCAS ID"
  						placeholder="Enter UCAS ID"
  						id="ucasinput"
  						type="text"
  						name="ucas"
  						attribute={disabledInputs}
  						className={textboxClassName}
  						onChange={(e) => setUcasInput(e.target.value)}
  						value={nameInput}
  					/>
  				</span>
  				<span className="ess-form-right">
  					<RadioButton
  						heading="Nationality"
  						options={nationalityOptions}
  						name="nationality"
  						attribute={disabledInputs}
  						onClick={(e) => setNameInput(e.target.value)}
  					/>
  					<RadioButton
  						heading="Convictions"
  						options={criminalOptions}
  						name="criminal"
  						subtitle="Do you have any unspent criminal convictions?"
  						attribute={disabledInputs}
  					/>
  					<RadioButton
  						heading="Learning Support"
  						options={supportOptions}
  						name="support"
  						subtitle="Do you have any additional learning support needs or disabilities?"
  						attribute={disabledInputs}
  					/>
  					<h4>Preferred Course</h4>
  					<DropdownMenu onSelect={(e) => setSelectedCourse(e.target.value)} id="courseSelection"/>
  				</span>
  			</div>
  			<div>{userTypeSelect()}</div>
  		</Container>
  	);
}

export default EssentialApplicantInfo;
