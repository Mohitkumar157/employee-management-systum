import { useContext } from "react"
import AppContext from "../context/appContext"

function useAppData(){
    const context = useContext(AppContext);
    if(!context){
        throw new Error("COntext should be used inside Provider..");
    }
    return context;
}
export default useAppData;