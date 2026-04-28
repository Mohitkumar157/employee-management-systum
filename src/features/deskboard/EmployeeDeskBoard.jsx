import Header from "../../components/Header"
import useAppData from "../../hooks/useAppData"
import TaskCounts from "../../tasks/TaskCounts"
import UserTaskDeskBoard from "../../tasks/UserTaskDeskBoard"



function EmployeeDeskBoard() {
  const { activeEmployeeData} = useAppData();
  return (
    <>
        <Header />
        <TaskCounts />
        <div className='user-task bg-[#1f232a] p-6! my-6! rounded-xl'>
        <h2 className='user-task-heading text-[32px]'>
          {!activeEmployeeData?.tasks?.length ? <>No tasks assigned 🎉 <br />Enjoy your day!</> : "Your Task"}
         
          </h2>
       <div className="task-wraper  grid gap-6 xl:grid-cols-3 md:grid-cols-2 ">
        {activeEmployeeData?.tasks.map((task) => <UserTaskDeskBoard userTasks ={task} key={task.taskId}/>)}
        
       </div>
       </div>
    </>
  )
}

export default EmployeeDeskBoard














