import React, { useEffect, useState , Fragment} from "react";
import { Link, Redirect } from "react-router-dom";
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../src/actions";

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


const Login = () =>{
	
	const dispatch = useDispatch();
  
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
            dispatch(auth(true));
          } else {
            console.log(parseRes)
            dispatch(auth(false));
          }

    }
    catch(err){
      console.error(err)
    }
  }

	return(
    <Background>
      <div className="container">
        <Box>
          <Header>
            Login
          </Header>
          <form onSubmit={onSubmitForm}>
          <Input
              placeholder="email" 
                type="text"
                name="email"
                value={email}
                onChange={e => onChange(e)}
            />
            <br />
            <Input
              placeholder="password" 
                type="password"
                name="password"
                value={password}
                onChange={e => onChange(e)}
            />
            <br />
            <Button>Submit</Button>
          </form>
          <br />
			   <StyledLink to="/register">Register</StyledLink>
        </Box>
      </div>
    </Background>
      

	);
}

export default Login;