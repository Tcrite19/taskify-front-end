import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const BookTaskBtn = (props) => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const singleTask = props.task?.find((task) => task?._id === Number(taskId));
  console.log("BookTaskBtn: singleTask", singleTask);

  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          navigate(`/task/${singleTask._id}/book`);
        }}
      >
        Book Task
      </Button>
    </>
  );
};
export default BookTaskBtn;
