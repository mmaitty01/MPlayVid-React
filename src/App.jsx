import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import VideoPage from "./Pages/VideoPage";
import Home from "./Pages/Home";

const App = () =>  (
  
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video/:id" element={<VideoPage />} />
    </Routes>
  </Router>
);

export default App;
