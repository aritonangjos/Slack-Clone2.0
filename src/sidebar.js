import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from "@material-ui/icons/Create";
import Icons from "./sidebarIcons";
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import { useCollection } from 'react-firebase-hooks/firestore';
import {db} from "./firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from "./firebase";

function HeaderBody(){
const [channel,load,error] = useCollection(db.collection("rooms"));
const [user] = useAuthState(auth);
return(
<Container>
<Info>
<h1>Slack <CreateIcon style={{background:"white",color:"black",borderRadius:"15px",marginLeft:"0.5em"}}/></h1>
<h3>
<FiberManualRecordIcon style={{fontSize:"14px",color:"green",marginTop:"1px"}} />
{user.displayName}
</h3>
</Info>

<buttons>
<Icons Icon={InsertCommentIcon} title="Threads"/>
<Icons Icon={InboxIcon} title = "Mentions & Reactions"/>
<Icons Icon={DraftsIcon} title= "Saved Items"/>
<Icons Icon={BookmarkBorderIcon} title= "Channel Browser"/>
<Icons Icon={PeopleAltIcon} title= "People & User Groups"/>
<Icons Icon={AppsIcon} title="Apps" />
<Icons Icon={FileCopyIcon} title="File Browser"/>
<Icons Icon={ExpandLessIcon} title="Show Less"/>
<hr />
<Icons Icon={ExpandMoreSharpIcon} title="Channels"/>
<hr />
<Icons Icon={AddSharpIcon} AddChannel title="Add Channels" />
{channel?.docs.map((doc)=>{
<Icons key={doc.id} id={doc.id} title={doc.data().name} />}
)}
</buttons>
</Container>
)
};


const Container = styled.div`
margin-top:50px;
background-color:#542991;
flex:0.3;
color:white;
padding-left:0.5rem;
padding-top:0.2em;
font-size:0.8em;
`;

const Info = styled.div`
border-top:1px solid #49274b;
border-bottom:1px solid #49274b;
color:white;
align-self:center;
margin-top:0.5em;
`;


export default HeaderBody;