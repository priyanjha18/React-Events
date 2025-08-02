import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";
export default function EventsPage() {

  const data=useLoaderData();
  // if (data.isError){
  //   return <p>{data.message}</p>
  // }
  const events=data.events;

  return (
    <>
      <EventsList events={events}/>
    </>
  );
}
export async function loader(){
              const response = await fetch("http://localhost:8080/events");
              if (!response.ok) {
                // return {isError:true,message:"could not fetch an event"}
                throw new Response(JSON.stringify({message:"could not fetch events"}),{status:500});
              }
              //const resData = await response.json();

              //const res=new Response("any data",{status:201});
              return response
            }