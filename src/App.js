import React from "react";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:chatRoomId" element={<Main />} />
      </Routes>
    </div>
  );
};

export default App;
