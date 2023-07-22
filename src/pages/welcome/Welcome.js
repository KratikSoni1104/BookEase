import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { AuthContext } from '../../context/AuthContext';

function WelcomePage() {

  const navigate = useNavigate();
  const {dispatch , error} = useContext(AuthContext);

  const handleClick = (e) => {
    console.log("hello");
    dispatch({type : "CLEAR_ERROR"})
    navigate("/login" , {state : {name : "register"}})
  }

  return (
    <WelcomePageContainer>
        <Wimg src="images/pexels-vincent-rivaud-2147486.jpg" alt=""></Wimg>
        <Wrap>
            <WelcomeText>
                <Wp1><em>Welcome to BookEase</em></Wp1>
                <Wp2>Unlock the World of Adventure and Comfort</Wp2>
            </WelcomeText>
            <Buttons>
                <Login onClick={() => navigate("/login" , {state : {name : "login"}})}>
                    Login
                </Login>
                <Register onClick={handleClick}>
                    Register
                </Register>
            </Buttons>
        </Wrap>
      
      {/* Add your login and register buttons here */}
    </WelcomePageContainer>
  );
}

export default WelcomePage;

const WelcomePageContainer = styled.div`
  /* Add any styles for the WelcomePage container here */
`

const Wimg = styled.img`
    height:100vh;
    width:100vw;
    z-index:-1;
    position:fixed;
    opacity:0.8;
`

const WelcomeText = styled.div`
  /* Add any styles for the WelcomeText here */
  
  
  h1 {
    color: #00B3FF;
    margin-left: 40px;
  }
  p {
    color: rgba(0, 0, 0, 0.70);
  }
`;

const Buttons = styled.div`
  /* Add any styles for the WelcomeText here */
  margin: 20px;

  @media (max-width : 480px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
  }
`;

const Login = styled.button`
  /* Add any styles for the WelcomeText here */
  border: none;
    padding: 10px 20px;
    background-color: #0071c2;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 15px;
    margin-right: 20px;
    width:150px;
    height: 40px;
    opacity: 0.6;

    &:hover{
      opacity: 1;
      transform: scale(1.05);
    }

    @media (max-width : 480px) {
    margin-bottom: 20px;
    margin-left: 20px;
    height: 30px;
    width: 100px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items:center;
  }
`;

const Register = styled.button`
  /* Add any styles for the WelcomeText here */
    width:150px;
    height: 40px;
    border: none;
    padding: 10px 20px;
    background-color: #0071c2;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 15px;
    margin-left: 20px;
    opacity: 0.6;

    &:hover{
      opacity: 1;
      transform: scale(1.05);
    }

    @media (max-width : 480px) {
    height: 30px;
    width: 100px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items:center;
  }
`;

const Wrap = styled.div`
    height:100vh;
    width:100vw;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width : 480px) {
      gap: 1px;
  }
    
`

const Wp1 = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;

  @media (max-width : 480px) {
    font-size: 20px;
  }
`

const Wp2 = styled.p`
  font-size: 24px;
  font-style: italic;
  color: #666;
  margin-bottom: 40px; 

  @media (max-width : 480px) { 
    font-size: 15px;
    text-wrap: wrap;
  }
`