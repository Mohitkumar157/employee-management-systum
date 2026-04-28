
import useAppData from "../hooks/useAppData";
import toast from "react-hot-toast";
function UserTaskDeskBoard({userTasks}) {

const {setAllData , allData , activeEmployeeData} = useAppData();


function handlerComplete(){
    setAllData((pre) =>{
        const updatedEmployees = pre.employeesData.map((employee) =>{
            if(employee.email !== activeEmployeeData.email) return employee;
            return{
                ...employee,

                tasks : employee.tasks.map((task) => {
                    if(task.taskId === userTasks.taskId){
                        return {
                            ...task,
                            isComplete : true
                        }
                    }
                    return task;
                }),
                taskCounts : employee.taskCounts.map((count) =>{
                    return {
                        ...count,
                        completed : Number(count.completed) +1,
                        active : (employee.tasks.filter((task) => !task.isComplete && !task.failed).length - 1).toString()
                      
                    }
                }),


            }
        })
        localStorage.setItem("employees" , JSON.stringify(updatedEmployees));
        return { ...pre , employeesData : updatedEmployees}

    })
   toast.success("Task marked as completed");
}



function handlerFailed(){
    setAllData((pre) =>{
        const updatedEmployees = pre.employeesData.map((employee) =>{
            if(employee.email !== activeEmployeeData.email) return employee;
            return{
                ...employee,
                tasks : employee.tasks.map((task) =>{
                    if(task.taskId === userTasks.taskId){
                        return{
                            ...task,
                            failed : true
                        }
                    }
                    return task;
                }),
                taskCounts : employee.taskCounts.map((task) =>{
                    return{
                        ...task,
                        failed : Number(task.failed) +1,
                        active : (Number(task.active) -1).toString()
                    }
                })
            }
        })
        localStorage.setItem("employees" , JSON.stringify(updatedEmployees));
        return { ...pre , employeesData : updatedEmployees};
    })
     toast.error("Task marked as failed");
}






  return (
  <div className="task-details bg-[linear-gradient(145deg,#1f242b,#16191e)] border border-[#3f3f3f]">
                     <div className="about-task px-4! py-5!">
                      <div className="task-heading flex justify-between items-center">
                        <span className='task-title'>{userTasks.title}</span>
                         <span className='task-date text-[#979797] text-[13px]'>Due-{userTasks.dueDate}</span>
                     </div>
                   <h2>{userTasks.category}</h2>
                   <p>{userTasks.description}</p>
                 <div className="task-buttons">
                     {!userTasks.failed && 
                     <button 
                     className={`complete-btn bg-[linear-gradient(135deg,#1d8743,#178741)] border-0 rounded p-2.5! w-full text-white'${userTasks?.isComplete ? 'cursor-not-allowed opacity-60!' : 'cursor-pointer!'}`}
                     onClick={handlerComplete}
                     disabled ={userTasks?.isComplete}
                     >
                     {userTasks?.isComplete ? "Completed" : "Complete"}
                    </button>}
                    {!userTasks?.isComplete && <button className={`failed-btn bg-[linear-gradient(135deg,#cf4646,#c32828)] border-0 rounded p-2.5! w-full text-white' ${userTasks.failed ? "cursor-not-allowed opacity-60!" : 'cursor-pointer!'}`}
                     onClick={handlerFailed}
                     >
                    failed
                    </button>}
                </div>
            </div>
        </div>
  )
}

export default UserTaskDeskBoard;














 
