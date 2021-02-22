import React from "react";
import styled from "styled-components";
import {db} from "./firebase";
import {enterRoom} from "./features/appSlice";
import {useDispatch} from "react-redux";

function Icons({Icon,title,AddChannel,id}){
const dispatch = useDispatch()

function addChannel(){
const channelName = prompt("Enter Channel Name");
if(channelName){
db.collection("rooms").add({
name:channelName
})}};

function SelectChannel(){
if(id){
dispatch(enterRoom({roomId:id}))
}
};

return(
<IconHeader
onClick={AddChannel ? addChannel : SelectChannel}
>
{Icon && <Icon fontSize="small" style={{padding:"8px"}} />}
{Icon ? (
<h3>{title}</h3>)
: (
<span>{title}</span>)
}
</IconHeader>


);
};

const IconHeader = styled.div`
display:flex;
font-size:12px;
margin-top:10px;
align-items:center;
:hover{
opacity:0.7;
background-color:#49274b;
border-radius:15px;
color:black;
cursor:pointer;
}
`;

export default Icons;