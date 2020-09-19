import React, { useEffect, useState , Fragment } from "react";
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../src/actions";

const Header = styled.h1`
  font-size:1.5rem;
  text-align: center;
  font-weight:300;
  padding-top: 15px;
  font-family: 'Raleway', sans-serif;
  color: black;
`

const SubColorText = styled.span`
	color:#2F4F4F;
	font-weight:150;
	font-size:1.2rem;
`

const Background = styled.div`
  background-color: #fafafa !important; 
  display:block;
  width:100%;
  text-align:center;
  height: 100vh;
`

const Button = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  width: 100px;
  padding: 10px 0;
  font-size: 16px;
  background-color: #4974a5;
  color: #fafafa;
  margin-bottom: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: transform .1s linear;

  &:hover {
        transform: scale(1.05);
    },
`

const Dashboard = () =>{

	const dispatch = useDispatch();

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
			console.error(err.message);
		}
	}

	const logout = async (e) => {
    	e.preventDefault();
    	try {
      		localStorage.removeItem("token");
      		dispatch(auth(false));
    	}
    	catch (err) {
      		console.error(err.message);
    	}
  	};

	useEffect(() => {
		getName() } , [] );





	return(
		<Background>
			<div className="container">
			<br/>
			<Header>Welcome to the site: <SubColorText>{name}</SubColorText></Header>
			<Button onClick={e => logout(e)} >Logout</Button>
			</div>
		</Background>
	);
}

export default Dashboard;
