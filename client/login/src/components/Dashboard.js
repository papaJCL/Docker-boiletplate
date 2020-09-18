import React, { useEffect, useState , Fragment } from "react";
import MealCalendar from './mealCalendar/MealCalendar';
import { toast } from "react-toastify";

const Dashboard = ({setAuth}) =>{


	const [name, setName] = useState("")

	const getName = async () => {
		try{
			const res = await fetch("/dashboard/name", {
        		method: "GET",
        		headers: { jwtToken: localStorage.token }
      		});

      		const parseData = await res.json();
      		setName(parseData.user_name);
		}
		catch(err){

		}
	}

	const logout = async (e) => {
    	e.preventDefault();
    	try {
      		localStorage.removeItem("token");
      		setAuth(false);
    	}
    	catch (err) {
      		console.error(err.message);
    	}
  	};

	useEffect(() => {
		getName() } , [] );





	return(
		<Fragment>
			<h1>Dashboard</h1>
			<p>Welcome to the site : {name} </p>
			<MealCalendar/>
			<button onClick={e => logout(e)} className="btn btn-primary">Logout</button>
		</Fragment>
	);
}

export default Dashboard;
