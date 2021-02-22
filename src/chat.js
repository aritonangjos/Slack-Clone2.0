import React from "react";
import styled from "styled-components";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DetailsIcon from '@material-ui/icons/Details';
import {useSelector} from "react-redux";
import ChatFunction from "./chatMsg";
import {SelectRoomId} from "./features/appSlice";
import {useCollection,useDocument} from "react-firebase-hooks/firestore";
import {db} from "./firebase";
import Messages from "./message";
import {useRef,useEffect} from "react";

function Chat(){
const roomId = useSelector(SelectRoomId);
const [roomDetails] = useDocument(roomId && db.collection("rooms").doc(roomId));
const[messages,loading] = useCollection( roomId && db.collection("rooms").doc(roomId).collection("messages").orderBy("timestamp","asc"));


return(
<ChatBody>
{roomDetails && messages &&(
<>
<Header>
<BodyLeft>
<StarBorderIcon /> #Rooms
</BodyLeft>

<BodyRight>
<DetailsIcon /> Details
</BodyRight>
</Header>

<ChatMessages>
{messages?.docs.map((doc)=>{
const { Msg, timestamp, user, image} = doc.data();
return <Messages key={doc.id} message={Msg} timestamp={timestamp} user={user} image={image} />
}
)}
</ChatMessages>
<ChatFunction channelName={roomDetails?.data().name} channelId={roomId} />
</>
)}
</ChatBody>
)};

const ChatBody = styled.div`
margin-top:50px;
flex:0.7;
flex-grow:1;
overflow-y:scroll;
`;

const BodyLeft = styled.div`
`;

const BodyRight= styled.div`


`;


const Header = styled.div`
display:flex;
justify-content:space-between;
padding:20px;
align-items:center;
border-radius:15px;
border-bottom:1px solid lightgrey;
box-shadow:5px 5px 15px rgba(0,0,0,0.5),
    -5px -5px 15px rgba(255,255,255,0.1);
`;
const ChatMessages = styled.div`



`;
export default Chat;