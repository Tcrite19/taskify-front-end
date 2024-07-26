const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;

export const signup = async (user) => {
  try {
    const res = await fetch(`${BACKEND_URL}/users/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const IsParsable = (data) => {
      try {
        JSON.parse(data);
      } catch (e) {
        return false;
      }
      return true;
    };

    const Obj = JSON.stringify({
      results: IsParsable(res) ? JSON.parse(res) : false,
    });

    return IsParsable(Obj) ? JSON.parse(Obj) : false;

    if (json.token) {
      localStorage.setItem("token", json.token); // add this line to store the JWT token in localStorage

      const user = JSON.parse(atob(json.token.split(".")[1]));

      return user;
    }
    if (json.err) {
      throw new Error(json.err);
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const signin = async (user) => {
  try {
    const res = await fetch(`${BACKEND_URL}/users/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    const IsParsable = (data) => {
      try {
        JSON.parse(data);
      } catch (e) {
        return false;
      }
      return true;
    };

    const Obj = JSON.stringify({
      results: IsParsable(res) ? JSON.parse(res) : false,
    });

    return IsParsable(Obj) ? JSON.parse(Obj) : false;

    if (json.token) {
      localStorage.setItem("token", json.token);

      const user = JSON.parse(atob(json.token.split(".")[1]));

      return user;
    }
    if (json.err) {
      throw new Error(json.err);
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getUser = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  const user = JSON.parse(atob(token.split(".")[1]));
  return user;
};

export const signout = () => {
  localStorage.removeItem("token");
};

/* API CALLS FOR TASKS */

export const getTasks = async (tasks) => {
  try {
    const response = await fetch(BACKEND_URL + "/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tasks),
    });
    const tasks = await response.json();
    return tasks;
  } catch (error) {
    error.message = "Error fetching tasks";
    throw error;
  }
};

export const getTask = async (task) => {
  try {
    const response = await fetch(BACKEND_URL + "/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const task = await response.json();
    return task;
  } catch (error) {
    error.message = "Error fetching task";
    throw error;
  }
};

export const addTask = async (task) => {
  try {
    const response = await fetch(BACKEND_URL + "/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const newTask = await response.json();
    return newTask;
  } catch (error) {
    error.message = "Error fetching task";
    throw error;
  }
};

export const deleteTask = async (task) => {
  try {
    const response = await fetch(BACKEND_URL + "/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const newTask = await response.json();
    return newTask;
  } catch (error) {
    error.message = "Error fetching tasks";
    throw error;
  }
};

export const updateTask = async (task, updatedTask) => {
  if (!task || !updatedTask) {
    throw new Error("Error: task or updatedTask is null or undefined");
  }
  try {
    const response = await fetch(BACKEND_URL + "/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const task = await response.json();
    const updatedTask = await updateTask(task, updatedTask);
    return updatedTask;
  } catch (error) {
    error.message = "Error fetching task";
    throw error;
  }
};

export const bookTask = (task) => {
  try {
    if (task) {
      console.log("App: bookTask", task);
      const updatedTask = { ...task, booked: true };
      setTask((prevTasks) =>
        prevTasks.map((task) => (task._id === task._id ? updatedTask : task))
      );
      setBooked(true);
    }
  } catch (error) {
    error.message = "Error fetching task";
    throw error;
  }
};

export const searchTask = async (task) => {
  try {
    const response = await fetch(`${BACKEND_URL}/tasks?name=${task}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const tasks = await response.json();
    return tasks.length > 0 ? tasks[0] : null;
  } catch (error) {
    error.message = "Error fetching task";
    throw error;
  }
};
