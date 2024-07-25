import TaskList from "../TaskList/TaskList";

const TasksComponent = () => {
  const handleBookTask = async (id) => {
    try {
      const response = await fetch("/tasks/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const updatedTask = await response.json();
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task._id === id ? updatedTask : task))
      );
    } catch (error) {
      console.error("Error booking task:", error);
    }
  };

  return (
    <>
      <TaskList handleBookTask={handleBookTask} />
    </>
  );
};
export default TasksComponent;
