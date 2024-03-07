import React from "react";
import Profile from "./components/Profile";
import AboutMe from "./components/AboutMe";
import ResumeItem from "./components/ResumeCard";

// Placeholder for actual resume details
const resumeItems = [...Array(6)];

function App() {
  return (
    <div className="px-4 md:px-12 flex flex-col md:flex-row min-h-screen w-100 bg-base">
      <Profile />
      <div className="py-8 md:py-24 h-full max-h-full w-full">
        <AboutMe />
        <ul className=" pt-8 md:pt-24 group">
          {resumeItems.map((x) => (
            // Placeholder for resume card size
            <li className="h-96 group-hover:opacity-50 hover:!opacity-100">
              <ResumeItem></ResumeItem>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
