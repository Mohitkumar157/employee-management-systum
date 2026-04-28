import AdminDeskBoard from './features/deskboard/AdminDeskBoard'
import EmployeeDeskBoard from './features/deskboard/EmployeeDeskBoard'
import LoginForm from './features/auth/LoginForm'
import useAppData from './hooks/useAppData';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
function App() {
const {allData ,activeUser , setActiveUser}  = useAppData();

useEffect(() =>{
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if(loggedInUser){
    setActiveUser(loggedInUser);
  }
  
}, [])
  function getUserEmailPassword(email , password){
    if(!allData) return;
    const isActiveEmployee = allData.employeesData.find((employee) => employee.email === email);
    if(isActiveEmployee){
      if(isActiveEmployee.email === email && isActiveEmployee.password === password){
          setActiveUser({role : "employee" , currentUser : isActiveEmployee});
          toast.success("Login successful");
          localStorage.setItem("loggedInUser" , JSON.stringify({role : "employee" , currentUser : isActiveEmployee}));
          return;
      }
    }
    if(email === "admin@gmail.com" && password === "admin123"){
      setActiveUser({role : "admin" , currentUser : allData.adminData});
      toast.success("Login successful");
      localStorage.setItem("loggedInUser" , JSON.stringify({role : "admin" , currentUser : allData.adminData}));
      return;
    }else{
     toast.error("Invalid email or password");
      
    }
     
  }
 
  
  return (
    <div className='max-w-295.5 my-0 mx-auto! sm: px-4!'>
      <Toaster position='top-right'/>
      {!activeUser && <LoginForm  getUserEmailPassword = {getUserEmailPassword}/>}
      {activeUser?.role === "admin" && <AdminDeskBoard />}
      {activeUser?.role === "employee" && <EmployeeDeskBoard />}
    
    </div>
  )
}

export default App