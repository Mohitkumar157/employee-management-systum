import useAppData from '../hooks/useAppData'
import toast from 'react-hot-toast';
function Header() {
    const {activeUser , setActiveUser} = useAppData()
    
    function logOut(){
    localStorage.removeItem("loggedInUser")
    setActiveUser(null);   
    toast("Logged out successfully"); 
    }
    
  
    
  return (
    <header>
    <div className='header-logout flex justify-between items-center mx-auto! my-5!  py-3! bg-[#1F232A] rounded-[10px] text-white max-w-292.5'>
      <div className="employee-info flex items-center gap-2 md:gap-5">
        <div className="profile-logo max-w-17.5 max-h-17.5 rounded-full overflow-hidden">
          <img src={activeUser.currentUser.profilePicture} alt={activeUser.currentUser.name} className='w-full h-full object-cover' />
        </div>
        <div className="name-designation">
          <h1 className=''><span className='user-name font-semibold text-[16px]! md:text-[24px]!'>{activeUser?.currentUser?.name}</span></h1>
          <p className='designation text-[14px] bg-transparent bg-clip-text bg-linear-to-r from-white to-gray-400'>{activeUser?.currentUser?.designtion}</p>
        </div>
      </div>
        
        
        <button 
         className='logout-btn px-6! py-2! rounded-lg  bg-[#1565C0] font-semibold' 
         onClick={() => logOut()}>Log Out
        </button>
    </div>
    </header>
  )
}

export default Header