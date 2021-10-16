import React from 'react';
import './DropdownMenu.css';
import {isMobile} from 'react-device-detect';

function DropdownMenu({id, placeholder, options, onSelect, ...props}) {
  	let dropdownClassName = isMobile ? "MobileDropdown" : "Dropdown";

  	return (
  		<select id={id} 
  			className={dropdownClassName}
			  onChange={onSelect} >
  			<option value="">{placeholder}</option>
  			{options.map((value, i) => (
  				<option key={i} value={value.value}>{value.label}</option>
  			))}
  		</select>
  	);
}

//TODO: put subjects in a consts/global file and convert them to ReactProps here
DropdownMenu.defaultProps = {
	options: [
		{ value: 'computing', label: 'BSc (Hons) Computing and Information Systems' },
		{ value: 'criminoloy', label: 'BA (Hons) Crimonology'},
		{ value: 'digitalArts', label: 'FDA Digital Arts'}
	]
};

export default DropdownMenu;