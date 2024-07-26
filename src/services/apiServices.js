const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;

export const signup = async (user) => {
  try {
    const res = await fetch(`${BACKEND_URL}/users/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
    const json = await res.json()

    if (json.token) {
      localStorage.setItem('token', json.token); // add this line to store the JWT token in localStorage

      const user = JSON.parse(atob(json.token.split('.')[1]));

      return user
    }
    if (json.err) {
      throw new Error(json.err)
    }
  } catch (err) {
    console.log(err)
    throw err
  }
}


export const signin = async (user) => {
  try {
    const res = await fetch(`${BACKEND_URL}/users/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
    const json = await res.json()

    if (json.token) {
      localStorage.setItem('token', json.token); // add this line to store the JWT token in localStorage

      const user = JSON.parse(atob(json.token.split('.')[1]));

      return user
    }
    if (json.err) {
      throw new Error(json.err)
    }
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const getUser = () =>  {
  const token = localStorage.getItem('token');
  if (!token) return null;
  const user = JSON.parse(atob(token.split('.')[1]));
  return user;
}

export const signout = () => {
  localStorage.removeItem('token');
};

/* API CALLS FOR TASKS */

export const getTasks = async (task) => {
  try {
    const response = await fetch(
      `${BACKEND_URL}/tasks?name=${task}` || BACKEND_URL + "/tasks"
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
    const response = await fetch(`${BACKEND_URL}/${id}`);
    const task = await response.json();
    return task;
  } catch (error) {
    error.message = "Error fetching task";
    throw error;
  }
};

export const addTask = async (task) => {
  const response = await fetch(BACKEND_URL + "/tasks", {
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
  const response = await fetch(`${BACKEND_URL}/${id}`, {
    method: "DELETE",
  });
  const deletedTask = await response.json();
  return deletedTask;
};

export const updateTask = async (id, updatedTask) => {
  const response = await fetch(`${BACKEND_URL}/${id}`, {
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
    const response = await fetch(BACKEND_URL + queryString);
    const tasks = await response.json();
    return tasks;
  } catch (error) {
    error.message = "Error fetching tasks";
    throw error;
  }
};
