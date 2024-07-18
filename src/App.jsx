import { useState } from "react";

import NavBar from "./components/NavBar/NavBar.jsx";
import Homepage from "./components/Homepage.jsx";
import { Route, Routes } from "react-router-dom";
import TaskList from "./components/TaskList/TaskList.jsx";
import TaskDetails from "./components/TaskDetails/TaskDetails.jsx";
import SearchForm from "./components/SearchForm/SearchForm.jsx";


import "./App.css";

const initialState = [
  {_id: 1, name: "Home Repairs", description: "Home repairs", booked: false},
  {_id: 2, name: "Yard Work", description: "Yard Work", booked: false},
  {_id: 3, name: "Painting", description: "Painting", booked: false},
  {_id: 4, name: "Cleaning", description: "Cleaning", booked: false},
  {_id: 5, name: "Junk Removal", description: "Junk Removal", booked: false},
  {_id: 6, name: "Furniture Assembly", description: "Furniture Assembly", booked: false},
  {_id: 7, name: "Moving", description: "Moving", booked: false},
  {_id: 8, name: "Electrical Work", description: "Electrical Work", booked: false},
  {_id: 9, name: "Plumbing Help", description: "Plumbing Help", booked: false},
  {_id: 10, name: "Locksmith Services", description: "Locksmith Services", booked: false},
  {_id: 11, name: "Car Wash", description: "Car Wash", booked: false},
  {_id: 12, name: "Organization", description: "Organization", booked: false},
  {_id: 13, name: "Errands", description: "Errands", booked: false},
  {_id: 14, name: "General Mounting", description: "General Mounting", booked: false},
  {_id: 15, name: "Car Repair", description: "Car Repair", booked: false},
  {_id: 16, name: "Packing & Unpacking", description: "Packing & Unpacking", booked: false},
];

const App = () => {

  const [task, setTask] = useState(initialState);

  const addTask = (newTask) => {
    console.log("App: addTask", newTask);
    newTask._id = task.length + 1;
    setTask([...task, newTask]);
  }

  const removeTask = (newTask) => {
    console.log("App: removeTask", newTask);
    setTask(task.filter((task) => task._id !== newTask._id));
  }

  const bookTask = (newTask) => {
    console.log("App: bookTask", newTask);
    setTask(task.map((task) => {
      if (task._id === newTask._id) {
        return newTask;
      }
      return task;
    }));
  }


  return (
    <>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/task" element={<TaskList task={task} />} />
          <Route
            path="/task/:taskId"
            element={<TaskDetails task={task} />}
          />
          <Route
            path="/task/new"
            element={<SearchForm addTask={addTask} />}
          />
        </Routes>
        <SearchForm addTask={addTask} />
      </div>
    </>
  );
};

export default App;

