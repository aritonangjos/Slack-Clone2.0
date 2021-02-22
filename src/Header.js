import React from "react";
import styled from 'styled-components';
import {Avatar} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from "./firebase";

function Home(){
const [user] = useAuthState(auth);
return(
<div className="bodyHeader">
<Header>

<Left>
<Avatar onClick={(()=>auth.signOut())} src={user.photoURL} alt={user.displayName}/>
<AccessTimeIcon />
</Left>

<Center>
<SearchIcon />
<input placeholder="search" />
</Center>

<Right>
<AccessTimeIcon />
</Right>

</Header>

</div>
)

};


const Header = styled.div`
position:fixed;
background: white;
display:flex;
align-items:center;
padding:2px;
justify-content:space-between;
background: #542991;
height:3rem;
color:white;
width:100%;
`;

const Left = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
flex:0.3;
padding: 1rem;
`;

const Center = styled.div`
flex:0.4;
display:flex;
color:grey;
border:1px solid grey;
background-color:#421f44;
border-radius:15px;
input{
background: transparent;
border:none;
color:white;
outline:0;
}

`;

const Right = styled.div`
flex:0.3;
display: flex;
justify-content: flex-end;
padding-right:1.5rem;
`;

export {Home};