import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./app/App.tsx";
import AIStressScore from "./app/AI Stress Score/AIStressScore.tsx";
import AcademicLoadTracker from "./app/Academic Load Tracker/AcademicLoadTracker.tsx";
import "./styles/index.css";

// 🚀 Video Preloader to ensure 0.1s background loading
const VideoPreloader = () => {
  useEffect(() => {
    const videos = [
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4", // Stress
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"  // Academic
    ];
    
    videos.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'video';
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  return null;
};

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <VideoPreloader />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/ai-stress-score" element={<AIStressScore />} />
      <Route path="/academic-load-tracker" element={<AcademicLoadTracker />} />
    </Routes>
  </BrowserRouter>
);