import React from "react";
import '../../Academy.css'
import { Link } from 'react-router-dom'

import BackgroundImg from '../../assets/images/RK.jpg'

import BackgroundImage from '../../assets/images/Delco.jpg'
import Select from 'react-select';

const aquaticCreatures = [
<<<<<<< HEAD
	{ label: 'Banglore', value: 'Delco Boxing Academy' },
	{ label: 'Chennai', value: 'RK Boxing Academy' },
=======
	{ label: 'Banglore', value: 'Banglore' },
	{ label: 'Chennai', value: 'Chennai' },
>>>>>>> f10e1bca9b23f8e4c932d7f8faa56127a4d987f4
  ];


export default function ProfileCard() {
	return (
		
	<div>
<header>
		<Link to="/Academy">
			<button className="primary-button">Academy</button>
		</Link>
		
		<Link to="/Enrolled">
			<button className="primary-button">Enrolled Course</button>
		</Link>
	
		<Link to="/">
		<button className="primary-button">Log out</button>
			</Link>
			<center>
		<div className="App">	
      <Select
        options={aquaticCreatures}
      />
    </div>
	</center>
			</header>
		<br/>
		<br />
		
		<center>
		
		<Link to="/Courses">
			<button>
	
		
		<div className="card-container" id="userAcademyGrid1">
			<header>
				<img src={BackgroundImage} alt="Delco Boxing Academy" />
				<h3 className="bold-text">Delco Boxing Academy</h3>
			</header>
			
			<div className="social-container">
				<div className="Place">
					<h2 className="bold-text">	Place:Banglore
			</h2>
				</div>
				
				<div className="Rating">
					<h2 className="bold-text">Rating:4.5</h2>
					
				</div>
			</div>
			</div>
			</button>
			</Link>
		<br/>
		<br/>
		<Link to="/Courses">
			<button>
	
		
		<div className="card-container" id="userAcademyGrid2">

			<header>
			<img src={BackgroundImg} alt="Delco Boxing Academy" />

				<h3 className="bold-text">RK Boxing Academy</h3>
			</header>
			
			<div className="social-container">
				
				<div className="Place">
					<h2 className="bold-text">	Place:Chennai
			</h2>
				</div>
				
				<div className="Rating">
					<h2 className="bold-text">Rating:4.4</h2>
					
				</div>
			</div>
		</div>
		</button>
			</Link>
		</center>
		
		</div>
	);
}

