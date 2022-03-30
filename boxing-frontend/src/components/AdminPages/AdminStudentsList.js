import '../../Enrolled.css'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import React from "react"
import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core'
const aquaticCreatures = [
	{ label: 'Strength training', value: 'Strength training' },
	{ label: 'Gymnastics training', value: 'Gymnastics training' },
  ];
export default function StudentList() {
	return (
		
		<TableContainer component={Paper}>
			<center>
			<Link to="/AdminAcademy">
			<button className="primary-button">Academy</button>
		</Link>

		<Link to="/AdminCourse">
			<button className="primary-button">Course</button>
		</Link>

		<Link to="/AdminStudentsList">
			<button className="primary-button">Students</button>
		</Link>

		<Link to="/AdminAddStudent">
		<button className="primary-button">Add Students</button>
	</Link>

		<Link to="/">
		<button className="primary-button">Log out</button>
			</Link>

			</center>
		<br/>
		<center>
		<div className="App">	
      <Select
        options={aquaticCreatures}
      />
    </div>
	</center>
		<br />
<br/>						
			<Table>
				<TableHead className="table">
					<TableRow>
						<TableCell>Student ID</TableCell>
						<TableCell>Student Name</TableCell>
						<TableCell>Enrolled Course</TableCell>
						<TableCell>Mobile Number</TableCell>
						
						<TableCell>Action</TableCell>
						
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell>12322213</TableCell>
						<TableCell>Arul</TableCell>
						<TableCell>Boxing drills</TableCell>
						<TableCell>3393992020</TableCell>
						<TableCell> 
						<p><Link to="/AdminEditStudent">edit</Link>/<Link to="/">delete</Link></p>
						

						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>2321232</TableCell>
						<TableCell>Kavya</TableCell>
						<TableCell>Strength Training</TableCell>
						<TableCell>3393556200</TableCell>
						<TableCell> 
						<p><Link to="/AdminEditStudent">edit</Link>/<Link to="/">delete</Link></p>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>2321123</TableCell>
						<TableCell>Manoj</TableCell>
						<TableCell>Conditioning work</TableCell>
						<TableCell>3393992027</TableCell>
						<TableCell> 
						<p><Link to="/AdminEditStudent">edit</Link>/<Link to="/">delete</Link></p>
			
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
		

	)
}



