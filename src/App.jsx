import { useState } from "react";

import NavBar from "./components/NavBar/NavBar.jsx";
import Homepage from "./components/Homepage/Homepage.jsx";
import { Route, Routes } from "react-router-dom";
import TaskList from "./components/TaskList/TaskList.jsx";
import TaskCard from "./components/TaskCard/TaskCard.jsx";
import SearchForm from "./components/SearchForm/SearchForm.jsx";
import data from "../data/data.json";

const tasks = data;

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [booked, setBooked] = useState(false);
  const [task, setTask] = useState(tasks);

  const addTask = (newTask) => {
    if (newTask) {
      console.log("App: addTask", newTask);
      setTask((prevTasks) => [...prevTasks, newTask]);
    }
  };

  const removeTask = (newTask) => {
    if (newTask && newTask._id) {
      console.log("App: removeTask", newTask);
      setTask((prevTasks) =>
        prevTasks.filter((task) => task._id !== newTask._id)
      );
    }
  };

  const displayConfirmation = () => {
    setBooked(true);
  };

  const bookTask = (task) => {
    if (task) {
      console.log("App: bookTask", task);
      const updatedTask = { ...task, booked: true };
      setTask((prevTasks) =>
        prevTasks.map((task) => (task._id === task._id ? updatedTask : task))
      );
      setBooked(true);
    }
  };

  return (
    <>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tasks" element={<TaskList tasks={tasks} />} />
          <Route
            path="/task/:taskId"
            element={<TaskCard tasks={task} bookTask={bookTask} />}
          />
          <Route path="/task/new" element={<SearchForm addTask={addTask} />} />
        </Routes>
        <SearchForm addTask={addTask} />
      </div>
    </>
  );
};

export default App;
