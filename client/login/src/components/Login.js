import React, { useEffect, useState , Fragment} from "react";
import { Link, Redirect } from "react-router-dom";
import styled from 'styled-components'

export const Header = styled.h1`
  font-size:2.5rem;
  text-transform: uppercase;
  text-align: center;
  font-weight:700;
  margin-top:1.5em;
  font-family: 'Raleway', sans-serif;
  letter-spacing: 2px;
`

export const AboutStyles = styled.div`
  align-items: center;
    background: red no-repeat center center ;
    //background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    //flex-wrap: wrap;
    overflow-x: hidden;
`


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
    <AboutStyles>
			<Header> Login</Header>
			<form onSubmit={onSubmitForm}>
        		<input
        			placeholder="email" 
          			type="text"
          			name="email"
          			value={email}
          			onChange={e => onChange(e)}
        		/>
        		<input
        			placeholder="password" 
          			type="password"
          			name="password"
          			value={password}
          			onChange={e => onChange(e)}
        		/>
        		<button>Submit</button>
      		</form>
			<Link to="/register">register</Link>
      </AboutStyles>
	);
}

export default Login;