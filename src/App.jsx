import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {
  getTasks,
  addTask,
  deleteTask,
  updateTask,
  bookTask,
} from "../services/taskService";

import NavBar from "./components/NavBar/NavBar.jsx";
import Loading from "./components/Loading/Loading.jsx";
import Homepage from "./components/Homepage/Homepage.jsx";
import LoginPage from "./components/LoginPage/LoginPage.jsx";
import SignupPage from "./components/SignupPage/SignupPage.jsx";
import TaskList from "./components/TaskList/TaskList.jsx";
import TaskCard from "./components/TaskCard/TaskCard.jsx";
import SearchForm from "./components/SearchForm/SearchForm.jsx";
import data from "../data/data.json";
import BookingAddress from "./components/BookingAddress/BookingAddress.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import TaskForm from "./components/TaskForm/TaskForm.jsx";
import CreditCard from "./components/CreditCard/CreditCard.jsx";
import LoginSignupPage from "./components/LoginSignupPage/LoginSignupPage.jsx";


const tasks = data;

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [booked, setBooked] = useState(false);
  const [task, setTask] = useState(tasks);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setIsLoading(true);
        const tasks = await getTasks();
        setTask(tasks);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  const handleAddTask = async (task) => {
    const newTask = await addTask(task);
    setTask([...task, newTask]);
  };

  const handleDeleteTask = async (id) => {
    const deletedTask = await deleteTask(id);
    setTask(task.filter((task) => task._id !== deletedTask._id));
  };

  const handleUpdateTask = async (id, updatedTask) => {
    const updatedTaskData = await updateTask(id, updatedTask);
    setTask(
      task.map((task) =>
        task._id === updatedTaskData._id ? updatedTaskData : task
      )
    );
  };

  const handleBookTask = (task) => {
    if (task) {
      const updatedTask = { ...task, booked: true };
      setTask((prevTasks) =>
        prevTasks.map((task) => (task._id === task._id ? updatedTask : task))
      );
      setBooked(true);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/login", { email, password });
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", {
        firstName,
        lastName,
        email,
        password,
      });
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup-login" element={<LoginSignupPage />} />
          {/* <Route path="/signup-login/login" element={<LoginPage />} />
          <Route
            path="/signup-login/signup"
            element={<SignupPage SignupPage={handleSignup} />}
          /> */}
          <Route
            path="/signup"
            element={<SignupPage SignupPage={handleSignup} />}
          />
          <Route
            path="/login"
            element={<LoginPage loginPage={handleLogin} />}
          />
          <Route path="/dashboard" element={<Dashboard tasks={task} />} />
          <Route path="/tasks" element={<TaskList tasks={tasks} />} />
          
      
          <Route
            path="/task/:id"
            element={<TaskCard tasks={task} bookTask={bookTask} />}
          />
          <Route
            path="/task/:id/book"
            element={<BookingAddress bookTask={handleBookTask} />}
          />
          <Route path="/task/new" element={<SearchForm addTask={addTask} />} />
          <Route
            path="/task/:id/edit"
            element={<SearchForm addTask={addTask} />}
          />
          <Route
            path="/payment"
            element={<CreditCard bookTask={handleBookTask}homepage-image-container />}
          />
          <Route path="/task-form" element={<TaskForm addTask={addTask} />} />
        </Routes>
        {isLoading && <Loading />}
      </div>
    </>
  );
};

export default App;
