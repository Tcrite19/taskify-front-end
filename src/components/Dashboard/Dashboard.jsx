import { Link } from "react-router-dom";
import TaskList from "../TaskList/TaskList";
const Dashboard = (props) => {
  return (
    <>
      <div className="dashboard">
        <h1>Dashboard</h1>
        <Link to="/tasks">View Tasks</Link>
        <TaskList tasks={props.tasks} onClick={props.bookTask} />

        <div className="dashboard-img">
          <img
            src="/imhttps://i.imgur.com/apDRyEJ.jpeg/theme-photos-Klby0nxseY8-unsplash.jpg."
            alt="drill"
          />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
