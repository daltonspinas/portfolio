import React from "react";
import Profile from "./components/Profile";
import AboutMe from "./components/AboutMe";
import ResumeItem from "./components/ResumeCard";
import { ResumeInfo } from "./common/globalInfo";


function App() {
  return (
    <div className="px-4 md:px-12 lg:px-28 flex flex-col md:flex-row min-h-screen w-100 bg-base">
      <Profile />
      <div className="py-8 md:py-24 h-full max-h-full w-full">
        <AboutMe />
        <ul className=" pt-8 md:pt-24 group/experience">
          {ResumeInfo.map((x) => (
            // Placeholder for resume card size
            <li className="group-hover/experience:opacity-50 hover:!opacity-100 my-6">
              <ResumeItem {...x}></ResumeItem>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
