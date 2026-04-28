import mohitPic from '../assets/images/me.jpg'
import nehaProfile from '../assets/images/neha.jpg';
import amitProfile from '../assets/images/amit.jpg';
import deepakProfile from '../assets/images/deepak.jpg';
import priyaProfile from '../assets/images/priya.jpg';
import rohitProfile from '../assets/images/rohit.jpg';
const employees = [
  {
    id: 1,
    name: "Mohit Kumar",
    email: "employee1@gmail.com",
    designtion : "Front end developer",
    profilePicture : mohitPic,
    password: "123",
    taskCounts: [{ active: '0', newTask: '0', completed: '0', failed: '0' }],
    tasks: [
    
    ],
  },

  {
    id: 2,
    name: "Rohit Sharma",
    email: "employee2@gmail.com",
    designtion : "Back end developer",
    profilePicture : rohitProfile,
    password: "123",
    taskCounts: [{ active: '0', newTask: '0', completed: '0', failed: '0'}],
    tasks: [
      
    ]
  },

  {
    id: 3,
    name: "Amit Verma",
    email: "employee3@gmail.com",
    designtion : "English content writer",
    profilePicture : amitProfile,
    password: "123",
    taskCounts: [{ active: '0', newTask: '0', completed: '0', failed: '0' }],
    tasks: [
      
    ],
  },

  {
    id: 4,
    name: "Neha Singh",
    email: "employee4@gmail.com",
    designtion : "Hindi content writer",
    profilePicture : nehaProfile,
    password: "123",
    taskCounts: [{ active: '0', newTask: '0', completed: '0', failed: '0' }],
    tasks: [
     
    ],
  },

  {
    id: 5,
    name: "Priya Mehta",
    email: "employee5@gmail.com",
    designtion : "Graphic designer",
    profilePicture :priyaProfile,
    password: "123",
    taskCounts: [{ active: '0', newTask: '0', completed: '0', failed: '0' }],
    tasks: [
      
    ],
  },
];





// Admin data
const admin = {
  name : "Admin",
  designtion : "Admin",
  profilePicture : deepakProfile,
  id: 101,
  email: "admin@gmail.com",
  password: "admin123"
};


function getLocalStorage(){
    const employeesData = JSON.parse(localStorage.getItem("employees"));
    const adminData = JSON.parse(localStorage.getItem("admin"));
    const appData = {adminData , employeesData};
    return appData
}

function setLocalStorage(){
     localStorage.setItem("employees" , JSON.stringify(employees));
     localStorage.setItem("admin" , JSON.stringify(admin));
}

export {getLocalStorage , setLocalStorage};



