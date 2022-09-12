import React from "react";
import { useParams } from "react-router-dom";
import { CHATS } from "../data/chats";
import SideBar from "./SideBar";
import ChatRoom from "./ChatRoom";
import { Box } from "@mui/material/";

const Main = () => {
  const { chatRoomId } = useParams();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <SideBar chats={CHATS} />
      <ChatRoom chatRoomId={chatRoomId} />
    </Box>
  );
};

export default Main;
