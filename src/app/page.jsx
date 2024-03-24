"use client";
import StoryCard from "./components/StoryInfo";
import FormCard from "./components/FormInfo";
import Sidebar from "./components/SideBar";
import { useState, useEffect } from "react";
export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [discussionForm, setDiscussionForm] = useState(true);
  const [stories, setStories] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1000);

  useEffect(() => {
    function handleResize() {
      setIsLargeScreen(window.innerWidth >= 1000);
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    // Reset discussionForm and stories when isLargeScreen becomes false
    if (!isLargeScreen) {
      setDiscussionForm(true);
      setStories(false);
    }
    if (isLargeScreen) {
      setDiscussionForm(true);
      setStories(true);
    }
  }, [isLargeScreen]);

  const toggleDiscussion = () => {
    setDiscussionForm(true);
    setStories(false);
  };
  const toggleStories = () => {
    setStories(true);
    setDiscussionForm(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <div className="flex text-center lg:max-w-4xl max-w-5xl mx-auto lg:justify-between justify-center mt-2">
        {/* discussion fourm */}
        <div>
          <h1
            className={`lg:text-2xl text-lg p-2 uppercase font-semibold lg:text-red-400  lg:p-3 rounded-sm mb-5 lg:bg-gray-100 text-white bg-blue-800 hover:bg-blue-700 lg:border-none ${
              discussionForm && "border-b-red-500 border-b-4 bg-blue-700"
            }`}
            onClick={toggleDiscussion}
          >
            Discussion Fourm
          </h1>
        </div>
        <div>
          <h1
            className={`lg:text-2xl text-lg p-2 uppercase font-semibold lg:text-red-400  lg:p-3 rounded-sm mb-5  lg:bg-gray-100 text-white bg-blue-800 hover:bg-blue-700 lg:border-none ${
              stories && "border-b-red-500 border-b-4 bg-blue-700"
            }`}
            onClick={toggleStories}
          >
            Market stories
          </h1>
        </div>
      </div>
      <div className="flex justify-center max-w-5xl mx-auto">
        <div
          className={`${isLargeScreen && "flex-col"} ${
            !discussionForm && "hidden"
          } lg:flex-col`}
        >
          <FormCard />
          <FormCard />
          <FormCard />
          <FormCard />
        </div>
        <div
          className={`${isLargeScreen && "flex-col"} ${
            !stories && "hidden"
          } lg:flex-col`}
        >
          <StoryCard />
          <StoryCard />
          <StoryCard />
        </div>
      </div>
      <div>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
    </div>
  );
}
