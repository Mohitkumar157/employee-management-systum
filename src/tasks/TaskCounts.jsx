import useAppData from "../hooks/useAppData";
import ActiveTask from "./ActiveTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

function TaskCounts() {
const {activeEmployeeData} = useAppData();
if(!activeEmployeeData) return;
const taskCount = activeEmployeeData.taskCounts[0];
  return (
    <div className='task-list-container grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-4'>
    {taskCount.active && <ActiveTask task = {taskCount.active}/>}
    {taskCount.newTask && <NewTask  task={taskCount.newTask}/>}
    {taskCount.completed && <CompleteTask task={taskCount.completed}/>}
    {taskCount.failed && <FailedTask task={taskCount.failed}/>}
    </div>
  )
}

export default TaskCounts