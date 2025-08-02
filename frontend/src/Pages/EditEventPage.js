import EventForm from "../components/EventForm"
import { useRouteLoaderData } from "react-router-dom"
export default function EditEventsPage(){
    const data=useRouteLoaderData("event-detail")
    const event=data.event
    return <EventForm method="patch" event={event}></EventForm>
}