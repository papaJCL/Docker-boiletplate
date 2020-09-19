import React, { useEffect, useState , Fragment } from "react";
import { toast } from "react-toastify";
import { Link, Redirect } from "react-router-dom";
import styled from 'styled-components'

const Header = styled.h1`
  font-size:2.5rem;
  text-align: center;
  font-weight:300;
  margin-top:1.5em;
  padding-bottom:1.5rem;
  font-family: 'Raleway', sans-serif;
  z-index: 2;
  color: #2F4F4F;
  position: relative;
`

const Background = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

`

const Box = styled.div`
  background-color: #fafafa;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  text-align: center;
  padding: 40px;
  

  @media (max-width: 576px) {
    width: 100%
    border: none;
    background-color: #fafafa;
    box-shadow: none;
  }
}
`

const Input = styled.input`
  width: 80%;
  padding: 10px 0;
  font-size: 16px;
  color: black;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid grey;
  outline: none;
  background: transparent;

  @media (max-width: 576px) {
    width: 100%
  }
`

const Button = styled.button`
  width: 80%;
  padding: 10px 0;
  font-size: 16px;
  background-color: #00580e;
  color: #fafafa;
  margin-bottom: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: transform .1s linear;

  @media (max-width: 576px) {
    width: 100%
  }
  &:hover {
        transform: scale(1.05);
    },
`

const StyledLink = styled(Link)`
  font-size: 1.3rem;
  color: #696969;
  transition: color 0.1s linear;
  font-family: 'Raleway', sans-serif;


  &:hover {
    text-decoration: none;
    color: grey;
  }
`;

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
		<Background>
      		<div className="container">
      			<Box>
					<Header>
						Register
					</Header>
					<form onSubmit={onSubmitForm}>
					<Input type="email" name="email" placeholder="email" 
					className="form-control my-3" value={email} onChange={e => onChange(e)}
					/>
					<Input type="password" name="password" placeholder="password" 
					className="form-control my-3" value={password} onChange={e => onChange(e)}
					/>
					<Input type="text" name="name" placeholder="name" 
					className="form-control my-3" value={name} onChange={e => onChange(e)}
					/>
					<Button className="btn-success btn-block">Submit</Button>
			</form>
			<StyledLink to="/login">Login</StyledLink>
			</Box>
			</div>
    </Background>
	);
}

export default Register;