import React, { useEffect, useState , Fragment } from "react";
import { toast } from "react-toastify";
import { Link, Redirect } from "react-router-dom";

const Register = ({setAuth}) =>{

	const [inputs, setInputs] = useState({
		email: "",
		password: "",
		name: ""
	})

	const {email, password, name} = inputs;

	const onChange = (e) => {
		setInputs({...inputs , [e.target.name] : e.target.value})
	}

	const onSubmitForm = async(e) => {
		e.preventDefault();
		const body = { email, password, name };
		
		try{
			const response = await fetch("/auth/register",
        		{
          			method: "POST",
          			headers: {"Content-type": "application/json"},
          			body: JSON.stringify(body)
        		}
        	);
        	const parseRes = await response.json();

        	localStorage.setItem("token" , parseRes.jwtToken);

        	setAuth(true);
		}
		catch(err){
			console.error(err.message)
		}

	}

	return(
		<Fragment> 
			<h1 className="text-center my-5">Register</h1>
			<form onSubmit={onSubmitForm}>
				<input type="email" name="email" placeholder="email" 
					className="form-control my-3" value={email} onChange={e => onChange(e)}
				/>
				<input type="password" name="password" placeholder="password" 
					className="form-control my-3" value={password} onChange={e => onChange(e)}
				/>
				<input type="text" name="name" placeholder="name" 
					className="form-control my-3" value={name} onChange={e => onChange(e)}
				/>
				<button className="btn-success btn-block">Submit</button>
			</form>
			<Link to="/login">login</Link>
		</Fragment>
	);
}

export default Register;