import React from "react";
import TaskList from "../components/TaskList";
import Navbar from "../components/Navbar"; 

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <Navbar />
        <main className="p-4">
          <TaskList />
        </main>
      </div>
    </div>
  );
};

export default Home;
