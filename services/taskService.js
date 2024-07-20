const BASE_URL = "http://localhost:3000/tasks";

export const getTasks = async () => {
    const response = await fetch(BASE_URL);
    const tasks = await response.json();
    return tasks;
}

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
}

export const deleteTask = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
    });
    const deletedTask = await response.json();
    return deletedTask;
}

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
}

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

