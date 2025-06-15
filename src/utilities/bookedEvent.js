import { toast } from "react-toastify";
import { apiRequiestWithCredentials } from "./ApiCall"


const myBookingEvents = async()=>{

}
export const bookeEvents =async()=>{
    try {
     const data = await apiRequiestWithCredentials('get','/book-event-ids');
     localStorage.setItem('bookeEvent',JSON.stringify(data?.events))
    } catch (error) {
      console.log(error)
      toast.error(error?.response?.data?.message)
    }
}