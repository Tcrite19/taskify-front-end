import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {
  fetchSignup,
  fetchLogin,
  getUser,
  logout,
  getTasks,
  addTask,
  deleteTask,
  updateTask,
  bookTask,
} from "./services/apiServices.js";

import NavBar from "./components/NavBar/NavBar.jsx";
import Loading from "./components/Loading/Loading.jsx";
import Homepage from "./components/Homepage/Homepage.jsx";
import LoginPage from "./components/LoginPage/LoginPage.jsx";
import SignupPage from "./components/SignupPage/SignupPage.jsx";
import TaskList from "./components/TaskList/TaskList.jsx";
import TaskCard from "./components/TaskCard/TaskCard.jsx";
import data from "../data/data.json";
import BookingAddress from "./components/BookingAddress/BookingAddress.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import TaskForm from "./components/TaskForm/TaskForm.jsx";
import CreditCard from "./components/CreditCard/CreditCard.jsx";
import LoginSignupPage from "./components/LoginSignupPage/LoginSignupPage.jsx";
import UserAccount from "./components/UserAccount/UserAccount.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ErrorPage from "./components/404/ErrorPage.jsx";

const tasks = data;

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [booked, setBooked] = useState(false);
  const [task, setTask] = useState(tasks);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setIsLoading(true);
        const taskList = await getTasks();
        if (taskList & taskList.results) {
          const taskListItem = taskList.results.map((task) => ({
            ...task,
            booked: false,
          }));
          setTask(taskList);
        }
        setTask(tasks);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    if (user) {
      setTask(task.filter((task) => !task.booked));
      setBooked(user.booked);
      fetchTasks();
    }
    fetchTasks();
  }, [user]);

  // const getTasks = async (task) => {
  //   try {
  //     const tasks = await getTasks(task);
  //     if (tasks & tasks.results) {
  //       const taskListItem = tasks.results.map((task) => ({
  //         ...task,
  //         booked: false,
  //       }));
  //       setTask(taskListItem);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching tasks:", error);
  //   }
  // };

  const searchTask = async (_id) => {
    try {
      const tasks = await getTasks(task);
      setTask(tasks);
    } catch (error) {
      console.error("Error searching tasks:", error);
    }
  };

  const handleSearch = async (task) => {
    await searchTask(task);
  };
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

  const handleBookTask = (formData) => {
    if (!formData) {
      console.error("Form data is null or undefined");
      return;
    }

    try {
      setBooked(true);
      bookTask(formData);
    } catch (error) {
      console.error("An error occurred while handling the book task:", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await API.post("/users/login", { email, password });
      login(formData);
      setFormData(initialState);
      alert("Login Successful!");
      setValidated(true);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await API.post("/users/signup", {
        firstName,
        lastName,
        email,
        hashedPassword,
        username,
      });
      navigate("/users/login");
    } catch (err) {
      console.error(err);
    }
  };

  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   navigate("/");
  // };

  const handleLogout = () => {
    props.logout();
    setUser(null);
    props.history.push("/users/login");
  };

  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/users/signup-login" element={<LoginSignupPage />} />

          <Route
            path="/users/signup"
            element={<SignupPage setUser={setUser} />}
          />
          <Route
            path="/users/login"
            element={<LoginPage setUser={setUser} />}
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
          <Route path="/task/new" element={<TaskCard tasks={task} />} />
          <Route
            path="/task/:id/edit"
            element={<TaskCard tasks={task} bookTask={bookTask} />}
          />
          <Route
            path="/payment"
            element={<CreditCard bookTask={handleBookTask} />}
          />
          <Route path="/account" element={<UserAccount />} />
          <Route path="/task-form" element={<TaskForm addTask={addTask} />} />
          <Route
            path="/users/logout"
            element={<LoginPage setUser={setUser} />}
          />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
