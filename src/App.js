import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {Home} from "./Header";
import styled from "styled-components";
import HeaderBody from "./sidebar";
import Chat from "./chat";
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from "./login";
import {auth} from "./firebase";
import Spinner from "react-spinkit";

function App(){
const [user, loading] = useAuthState(auth);
if(loading){
return(
<LoadingContainer>
<Loading>
<img src="https://tr3.cbsistatic.com/hub/i/r/2016/05/17/e5a3713d-ac86-4b59-ac69-4bf2118eaec9/resize/1200x900/94015216f0a729fd4e372588bc358029/slackmarkweb.png" />
<Spinner name="wandering-cubes" fade="none"/>
</Loading>
</LoadingContainer>
)
};
return(
<Router>
{!user?(
<Login />):
(<>
<Home />
<Body>
<HeaderBody />
<Switch>
<Route path="/" exact>
<Chat />
</Route>
</Switch>
</Body>
</>
)}
</Router>
)
};


const Body = styled.div`
display:flex;
height:100vh;
`;

const LoadingContainer = styled.div`
display:grid;
placed-items:center;
height:100vh;
width:100%;
`;

const Loading = styled.div`
text-align:center;
padding-bottom:100px;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
img{
height:100px;
padding:20px;
margin-bottom:40px;

}

`;

export default App;