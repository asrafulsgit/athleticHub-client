import { toast } from "react-toastify";
import { apiRequiestWithCredentials } from "./ApiCall"


export const myBookingEvents = async()=>{
    try {
     const data = await apiRequiestWithCredentials('get','/my-booking-ids');
     localStorage.setItem('myBookings',JSON.stringify(data?.events))
    } catch (error) {
      
      toast.error(error?.response?.data?.message)
    }
}

export const bookeEvents =async()=>{
    try {
     const data = await apiRequiestWithCredentials('get','/book-event-ids');
     localStorage.setItem('bookeEvent',JSON.stringify(data?.events))
    } catch (error) {
      
      toast.error(error?.response?.data?.message)
    }
}