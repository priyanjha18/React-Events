import { redirect, useRouteLoaderData} from "react-router-dom";
import EventItem from "../components/EventItem";
import { getAuthToken } from "../util/auth";
export default function EventsDetailPage() {
    const data=useRouteLoaderData("event-detail")
    const eventDetail=data.event
  return (
    <>
    <EventItem event={eventDetail}></EventItem>
    </>
  );
}
export async function loader({request,params}){
  const id=params.eventId
  
  
  const response=await fetch(`http://localhost:8080/events/${id}`)
  if(!response.ok){
    throw new Response(JSON.stringify({message:"failed to fetch event"},{status:500}))
  }
  else{
    return response;
  }
}
export async function action({request,params}){
  const id=params.eventId;
  const token=getAuthToken();
  const response =await fetch("http://localhost:8080/events/" + id,{
    method:request.method,
    headers:{
      'Authorization' :"Bearer " + token
    }

  })
  if (!response.ok){
    throw new Response(JSON.stringify({message:"failed to delete event"}),{status:500})
  }
  return redirect("/events")


}