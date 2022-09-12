import React from "react";
import Chat from "./Chat";
import { Box } from "@mui/material/";

const SideBar = ({ chats }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2em",
      }}
    >
      {chats.length &&
        chats.map((chat) => {
          return <Chat key={chat.id} chat={chat} />;
        })}
    </Box>
  );
};

export default SideBar;
