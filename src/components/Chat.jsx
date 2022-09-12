import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Chat = ({ chat }) => {
  const nagivate = useNavigate();
  
  const handleChatRoomClick = () => {
    nagivate(`/${chat.id}`);
  };

  return <Button onClick={handleChatRoomClick}>{chat.name}</Button>;
};

export default Chat;
