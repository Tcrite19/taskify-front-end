import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

const TaskDetails = (props) => {
    const { taskId } = useParams();
    const singleTask = props.task.find((task) => task._id === Number(taskId));

    console.log("TaskDetails: singleTask", singleTask);

    if (!singleTask) {
        return <p>Task not found.</p>;
    }

    return (
      <>
        <h2>{singleTask.name}</h2>
        <dl>
          <dt>Description:</dt>
          <dd>{singleTask.description ?? 'No details available'}</dd>
          <Button variant="primary" className="m-2">Book</Button>
        </dl>
      </>
    );
  };
  
  export default TaskDetails;
  