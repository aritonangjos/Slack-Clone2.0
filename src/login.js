import React from "react";
import styled from "styled-components";
import {auth, provider} from "./firebase";

function Login(){
function signIn(e){
e.preventDefault();
auth.signInWithPopup(provider);
}
return(
<LoginContainer>
<Loginstyle>
<img src="https://tr3.cbsistatic.com/hub/i/r/2016/05/17/e5a3713d-ac86-4b59-ac69-4bf2118eaec9/resize/1200x900/94015216f0a729fd4e372588bc358029/slackmarkweb.png" alt="logo" />
<h1>Sign in to Continue</h1>
<p>sumit.slack.com</p>
<button onClick={signIn}>Sign In </button>
</Loginstyle>
</LoginContainer>
)
};

const LoginContainer = styled.div`
background-color:#e91e63;
height:100vh;
display:grid;
place-items:center;
`;

const Loginstyle = styled.div`
border-radius:15px;
padding:100px;
text-align:center;
background-color:white;
box-shadow: 0 1px 3px rgba(0,0,0,0.12),
              0 1px 2px rgba(0,0,0,0.24);
img{
object-fit:contain;
height:100px;
margin-bottom:40px;
}
button{
text-decoration: none;
    background: #2196f3;
    color:white;
    padding:8px 35px;
    border-radius:10px;
    font-size:17px;
    margin-top:5px;
    box-shadow: 0px 5px 15px rgba(0,0,0,0.5);
    cursor: pointer;

}
`;
export default Login;