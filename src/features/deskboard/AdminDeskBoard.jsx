import Header from '../../components/Header';
import toast from 'react-hot-toast';
import { useState } from 'react';
import useAppData from '../../hooks/useAppData';
import AllTask from '../../tasks/AllTask';
function AdminDeskBoard() {
  const {setAllData} = useAppData();
  const [title  , setTitle] = useState("");
  const [dueDate , setDueDate] = useState("");
  const [assignTo , setAssignTo] = useState("");
  const [category , setCategory] = useState("");
  const [description , setDiscribtion] = useState("");
 
  

  function handlerForm(e){
    e.preventDefault();
    const newTask = {
    title,
    dueDate,
    assignTo,
    category,
    description,
    taskId : Date.now() + Math.floor(Math.random() * 100000),
  }
   setAllData((pre) =>{
    const updatedEmployees = pre.employeesData.map((employee) =>{
      if(employee.name.toLowerCase() !== assignTo.toLowerCase()) return employee;
      return{
        ...employee,
        tasks : [...employee.tasks , newTask],
        taskCounts : employee.taskCounts.map((count) =>{
          return {
            ...count,
            newTask : Number(count.newTask)  +1,
            active : Number(count.active) + 1
          }
        })
      }

      
    })
    localStorage.setItem("employees" , JSON.stringify(updatedEmployees));
    return {...pre , employeesData : updatedEmployees};
   })

   setTitle("");
   setDueDate("");
   setAssignTo("");
   setCategory("");
   setDiscribtion("");
  toast.success("Task assigned successfully");
    
  }
  return (
    <>
   <Header />
    <div className='admin-deskboard bg-[#1f232a] py-5! !'>
      <div className="create-task-heading mb-4!">
        {/* <span><IoArrowBackCircleOutline /></span> */}
        <h3 className='text-[24px]'>Create Task</h3>
        </div>
     <form className='create-task w-full py-5 flex flex-col md:flex-row md:gap-37.5 sm:gap-6' onSubmit={(e) => handlerForm(e)}>
      

      <div className="form-inputs w-full">

        


         <label htmlFor="task title">Task Title</label>
      <input
      onChange={(e) => setTitle(e.target.value)}
      value={title}
       className='create-task-input w-full outline-0 p-3! rounded-md bg-inherit border border-[#a1a1a1]' 
       type="text" 
       required
       placeholder='Make a UI Design' 
       name='task title'/>
     
    
      <label htmlFor="date">Date</label>
      <input 
      required
      className='create-task-input create-task-input w-full outline-0 p-3! rounded-md bg-inherit border border-[#a1a1a1]' 
      type="date" 
      name='date'
       onChange={(e) => setDueDate(e.target.value)}
       value={dueDate}
      />
      <label htmlFor="assign-to">Assign to</label>
      <input 
      required
      onChange={(e) => setAssignTo(e.target.value)}
      value={assignTo}
      className='create-task-input create-task-input w-full outline-0 p-3! rounded-md bg-inherit border border-[#a1a1a1]' 
      type="text" 
      name="assign-to"  />
      <label htmlFor="category">Category</label>
      <input 
      required
      onChange={(e) => setCategory(e.target.value)}
      value={category}
      className='create-task-input create-task-input w-full outline-0 p-3! rounded-md bg-inherit border border-[#a1a1a1]' 
      type="text" name='category' 
      placeholder='Design , Development etc...'/>
      </div>
      

      <div className="discribtion-sumbit-btn ">
        <label htmlFor="discribtion">Discribtion</label>
      <textarea className='w-full outline-0 p-3! rounded-md bg-inherit border border-[#a1a1a1] min-h-54'
      onChange={(e) => setDiscribtion(e.target.value)}
      value={description}
       name="discribtion"
        placeholder='Detailed discribtion of task (Max 500 words)'
        required
      >
      </textarea>
      <button className='create-task p-3! bg-[#0277BD] text-white border-0 rounded-md w-full'>Create task</button>
      </div>
     </form>
      <AllTask />
    </div>
   </>
  )
}

export default AdminDeskBoard