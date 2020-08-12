import React ,{useState , useEffect} from "react";

import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import "./Chat.css";
import db from './Firebase';

function Chat() {
  const { roomID } = useParams();
  const [roomDetails , setRoomDetails] = useState(null);
  
  useEffect(()=>{
    db.collection('rooms').doc(roomID).onSnapshot(snapshot =>{
      setRoomDetails(snapshot.data());
    })
  }, [roomID] );
  
  
  
  // console.log(useParams());
  // console.log(history);
  return (
    <div className="chat">
      <div className="chat__header">
          <div className="chat__headerLeft" >
            <h4 className="chat__channelName">
                <strong># {roomDetails?.name}</strong>
                <StarBorderOutlinedIcon />
            </h4>
          </div>
          <div className="chat__headerRight">
                <InfoOutlinedIcon />
                Details
          </div>
      </div>
    </div>
  );
}

export default Chat;
