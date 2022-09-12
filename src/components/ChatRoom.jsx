import React from "react";
import { useEffect, useState } from "react";
import { CHATS } from "../data/chats";

const ChatRoom = ({ chatRoomId }) => {
  const [chat, setChat] = useState(CHATS[chatRoomId]);

  useEffect(() => {
    setChat(CHATS[chatRoomId]);
  }, [chatRoomId]);

  return (
    <div>
      {chat ? (
        <div>
          <h2>{chat.id}</h2>
          <h3>{chat.name}</h3>
        </div>
      ) : (
        <div>Empty</div>
      )}
    </div>
  );
};

export default ChatRoom;
