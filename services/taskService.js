const BASE_URL = "http://localhost:3000/";

export const getTasks = async (task) => {
  try {
    const response = await fetch(`${BASE_URL}/tasks?name=${task}` || BASE_URL + "/tasks");
    const tasks = await response.json();
    return tasks;
  } catch (error) {
    error.message = "Error fetching tasks";
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
