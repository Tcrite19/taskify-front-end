import { useState, useEffect, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import * as apiServices from "../src/services/apiServices"; 

import NavBar from "./components/NavBar/NavBar.jsx";
import Loading from "./components/Loading/Loading.jsx";
import Homepage from "./components/Homepage/Homepage.jsx";
import SigninForm from "./components/SigninForm/SigninForm.jsx";
import SignupForm from "./components/SignupForm/SignupForm.jsx";
import TaskList from "./components/TaskList/TaskList.jsx";
import TaskCard from "./components/TaskCard/TaskCard.jsx";
import data from "../data/data.json";
import BookingAddress from "./components/BookingAddress/BookingAddress.jsx";
import Landing from "./components/Landing/Landing.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import TaskForm from "./components/TaskForm/TaskForm.jsx";
import CreditCard from "./components/CreditCard/CreditCard.jsx";
import SigninSignupPage from "./components/SiginSignupPage/SiginSignupPage.jsx";
import UserAccount from "./components/UserAccount/UserAccount.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ErrorPage from "./components/404/ErrorPage.jsx";
import Signout from "./components/Signout";

const tasks = data;

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export const AuthedUserContext = createContext(null); 

const App = () => {
  const [user, setUser] = useState(apiServices.getUser());
  const [booked, setBooked] = useState(false);
  const [task, setTask] = useState(tasks);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setIsLoading(true);
        const taskList = await apiServices.getTasks();
        const tasks = taskList.results.map((task) => ({
          ...task,
          booked: false,
        }));
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

  const getTasks = async (task) => {
    try {
      const tasks = await getTasks(task);
      if (tasks & tasks.results) {
        const taskListItem = tasks.results.map((task) => ({
          ...task,
          booked: false,
        }));
        setTask(taskListItem);
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

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
      await API.post("/users/signin", { email, password });
      login(formData);
      setFormData(initialState);
      alert("Signin Successful!");
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
      navigate("/users/signin");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignout = () => {
    authService.signout();
    setUser(null);
  };

  return (
    <AuthedUserContext.Provider value={user}>
      <>
        <div>
          <NavBar user={user} handleSignout={handleSignout} />
          <Routes>
            {user ? (
              <Route path="/" element={<Dashboard user={user} />} />
            ) : (
              <Route path="/" element={<Landing />} />
            )}
            <Route
              path="/users/signup-login"
              element={<SigninSignupPage setUser={setUser} />}
            />
            <Route
              path="/users/signup"
              element={<SignupForm setUser={setUser} />}
            />
            <Route
              path="/users/signin"
              element={<SigninForm setUser={setUser} />}
            />
            <Route path="/dashboard" element={<Dashboard tasks={task} />} />
            <Route path="/tasks" element={<TaskList tasks={tasks} />} />
            <Route path="/task/:id" element={<TaskCard tasks={task} />} />
            <Route
              path="/task/:id/book"
              element={<BookingAddress bookTask={handleBookTask} />}
            />
            <Route
              path="/task/new"
              element={<TaskCard tasks={task} handleAddTask={handleAddTask} />}
            />
            <Route
              path="/task/:id/edit"
              element={<TaskCard tasks={task} handleAddTask={handleAddTask} />}
            />
            <Route path="/payment" element={<CreditCard bookTask={handleBookTask}/>} />
            <Route path="/account" element={<UserAccount setUser={setUser}/>} />
            <Route
              path="/task-form"
              element={<TaskForm handleAddTask={handleAddTask} />}
            />
            <Route path="/users/signout" element={<Signout />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      </>
    </AuthedUserContext.Provider>
  );
};

export default App;
