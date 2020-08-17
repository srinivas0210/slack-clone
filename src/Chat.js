import React, { useState, useEffect } from "react";
import firebase from "firebase";

import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

import "./Chat.css";
import Messages from "./Messages";
import db from "./Firebase";

function Chat() {
  const { roomID } = useParams();
  console.log("0");
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  const [input, setInput] = useState(null);

  useEffect(() => {
    console.log("1");

    console.log(roomID);
    db.collection("rooms")
      .doc(roomID)
      .onSnapshot((snapshot) => {
        setRoomDetails(snapshot.data());
        console.log(roomDetails);
      });
    console.log("details", roomDetails);
    console.log("2");
    db.collection("rooms")
      .doc(roomID)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
    console.log("Messages >>>", roomMessages);
  }, [roomID]);
  const sendMessage = (e) => {
    e.preventDefault();
    console.log(input);
    db.collection("rooms").doc(roomID).collection("messages").add({
      user: roomDetails.name,
      userImage: "https://www.google.com/a/help/intl/en/images/sites_35.gif",
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  // console.log(useParams());
  // console.log(history);
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            {roomDetails ? <strong># {roomDetails.name}</strong> : ""}
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <InfoOutlinedIcon />
          Details
        </div>
      </div>
      <div className="chat__messages">
        {roomMessages.map(({ user, userImage, message, timestamp }, index) => (
          <Messages
            key={index}
            message={message}
            user={user}
            userImage={userImage}
            timestamp={timestamp}
          />
        ))}
      </div>
      <div className="chat__input">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`message ${roomDetails?.name}`}
          />
          <button type="submit" onClick={sendMessage}>
            send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
