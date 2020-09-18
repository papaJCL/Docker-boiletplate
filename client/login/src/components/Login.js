import React, { useEffect, useState , Fragment} from "react";
import { toast } from "react-toastify";
import { Link, Redirect } from "react-router-dom";

const Login = ({setAuth}) =>{
	
	const [inputs, setInputs] = useState({
    	email: "",
    	password: ""
  	});

  	const { email, password } = inputs;

  	const onChange = (e) => {
		setInputs({...inputs , [e.target.name] : e.target.value})
	}

	const onSubmitForm = async(e) => {
		e.preventDefault();
		const body = { email, password };
		
		try{
			const response = await fetch("/auth/login",
        		{
          			method: "POST",
          			headers: {"Content-type": "application/json"},
          			body: JSON.stringify(body)
        		}
        	);
        	const parseRes = await response.json();

        	if (parseRes.jwtToken) {
        		localStorage.setItem("token", parseRes.jwtToken);
        		setAuth(true);
      		} else {
      			console.log(parseRes)
        		setAuth(false);
      		}

		}
		catch(err){
			console.error(err)
		}
	}

	return(
		<Fragment> 
			<h1 className="mt-5 text-center">Login</h1>
			<form onSubmit={onSubmitForm}>
        		<input
        			placeholder="email" 
          			type="text"
          			name="email"
          			value={email}
          			onChange={e => onChange(e)}
          			className="form-control my-3"
        		/>
        		<input
        			placeholder="password" 
          			type="password"
          			name="password"
          			value={password}
          			onChange={e => onChange(e)}
          			className="form-control my-3"
        		/>
        		<button className="btn btn-success btn-block">Submit</button>
      		</form>
			<Link to="/register">register</Link>
		</Fragment>
	);
}

export default Login;