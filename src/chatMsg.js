import React from "react";
import styled from "styled-components";
import {db} from "./firebase";
import {useState} from "react";
import firebase from "firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from "./firebase";

function ChatFunction({channelId, channelName}){
const [message, setMsg] = useState("");
const [user] = useAuthState(auth);

function SendMsg(e){
e.preventDefault()
if(!channelId){
return false;
}
db.collection("rooms").doc(channelId).collection("messages").add({
Msg: message,
timestamp: firebase.firestore.fieldValue.serverTimeStamp(),
user:user.displayName,
image:user.photoURL,
});
message ="";
};

return(
<ChatBody>
<form>
<input value={message} onChange={((e)=>setMsg(e.target.value))} placeholder="Enter Message" />
<button type="submit" hidden onClick={SendMsg}>Submit</button>
</form>
</ChatBody>
)


};

const ChatBody = styled.div`
border-radius:15px;
form{
display:flex;
position: relative;
width:100%;
}
input{
width:100%;
outline:none;
bottom:30px;
position:fixed;
color:black;
padding:20px;
}
button{
display:none;
}
`;


export default ChatFunction;