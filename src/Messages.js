import React from "react";
import "./Messages.css";

function Messages({ user, userImage, message, timestamp }) {
  console.log('mess is :',message);
  return (
    <div className="messages">
      <img src={userImage} alt="user Image here" />
      <div className="message__info">
        <h4>
          {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>

        <p>{message}</p>
      </div>
    </div>
  );
}

export default Messages;
