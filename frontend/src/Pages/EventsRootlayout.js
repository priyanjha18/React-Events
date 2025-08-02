import EventsNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router-dom";
export default function EventRootLayout(){
    return <>
    <EventsNavigation></EventsNavigation>
    <Outlet></Outlet>
    </>

}