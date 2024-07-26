const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`;

// Retrieve token from preferred storage method
const token = `${localStorage.getItem("token")}`;

// Define the headers, including the Authorization header with the token
const options = {
  headers: {
    Authorization: `Bearer ${token}`, // Use the retrieved token
  },
};

// Use fetch to send the request, including the token in the headers
const response = await fetch('/protected-resource', options);

export const fetchSignup = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/users/signup`, {
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      headers: {
        Authorization: `Bearer ${token}`, // Use the retrieved token
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();

    if (!data || !data.token) {
      throw new Error("Invalid signup response");
    }
    localStorage.getItem("token", data.token);
    localStorage.setItem("token", data.token);
    const userString = atob(data.token.split(".")[1]);
    if (!userString) {
      throw new Error("Invalid token");
    }
    const user = JSON.parse(userString);
    if (!user) {
      throw new Error("Invalid user");
    }
    return user;
  } catch (err) {
    console.error("Error fetching signup:", err);
    throw err;
  }
};

export const fetchLogin = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();

    if (!data || !data.token) {
      throw new Error("Invalid login credentials");
    }
    if (data.error) {
      throw new Error(data.error);
    }

    const token = data.token;
    if (!token) {
      throw new Error("No token provided");
    }

    localStorage.setItem("token", token);

    const userString = atob(token.split(".")[1]);
    if (!userString) {
      throw new Error("Invalid token");
    }

    const user = JSON.parse(userString);
    if (!user) {
      throw new Error("Invalid user");
    }

    return user;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const signin = (user) => {
  localStorage.setItem("token", user.token);
};

export const signup = (user) => {
  localStorage.setItem("token", user.token);
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getUser = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  const decodedToken = JSON.parse(atob(token.split(".")[1]));
  const user = {
    username: decodedToken.username,
    id: decodedToken.id,
    email: decodedToken.email,
  };

  return user;
};

/* API CALLS FOR TASKS */

export const getTasks = async (task) => {
  try {
    const response = await fetch(
      `${BASE_URL}/tasks?name=${task}` || BASE_URL + "/tasks"
    );
    const tasks = await response.json();
    return tasks;
  } catch (error) {
    error.message = "Error fetching tasks";
    throw error;
  }
};

export const getTask = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    const task = await response.json();
    return task;
  } catch (error) {
    error.message = "Error fetching task";
    throw error;
  }
};

export const addTask = async (task) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const newTask = await response.json();
  return newTask;
};

export const deleteTask = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  const deletedTask = await response.json();
  return deletedTask;
};

export const updateTask = async (id, updatedTask) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTask),
  });
  const updatedTaskData = await response.json();
  return updatedTaskData;
};

export const bookTask = (task) => {
  if (task) {
    console.log("App: bookTask", task);
    const updatedTask = { ...task, booked: true };
    setTask((prevTasks) =>
      prevTasks.map((task) => (task._id === task._id ? updatedTask : task))
    );
    setBooked(true);
  }
};

export const searchTask = async (task) => {
  try {
    const queryString = `?name=${task}`;
    const response = await fetch(BASE_URL + queryString);
    const tasks = await response.json();
    return tasks;
  } catch (error) {
    error.message = "Error fetching tasks";
    throw error;
  }
};
