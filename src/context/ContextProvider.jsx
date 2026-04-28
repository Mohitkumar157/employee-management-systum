import React, { useEffect, useState } from 'react'
import AppContext from './appContext'
import { getLocalStorage, setLocalStorage } from '../services/localService';

function ContextProvider({children}) {
  const [allData , setAllData] = useState({});
  const [activeUser , setActiveUser] = useState("");
  const STORAGE_VERSION = "v1";
    useEffect(() =>{
         if (localStorage.getItem("version") !== STORAGE_VERSION) {
         setLocalStorage();          
         localStorage.setItem("version", STORAGE_VERSION);
       }
        if(!localStorage.getItem("employees")){
            setLocalStorage();
        }
        setAllData( getLocalStorage());

        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if(loggedInUser){
          setActiveUser(loggedInUser);
        }
    } , []);


const activeEmployeeData = allData?.employeesData?.find((employee) => employee.email === activeUser?.currentUser?.email);

  return (
    <AppContext.Provider value={
        {
            allData,
            activeUser,
            setActiveUser,
            setAllData,
            activeEmployeeData

        }
    }>
     {children}
    </AppContext.Provider>
  )
}

export default ContextProvider