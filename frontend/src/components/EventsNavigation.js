import classes from './EventsNavigation.module.css';
import { NavLink,useRouteLoaderData } from 'react-router-dom';

function EventsNavigation() {
  const isLoggedIn=useRouteLoaderData("root");
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/events" end className={({isActive})=>isActive ?classes.active : undefined}>All Events</NavLink>
          </li>
          {
            isLoggedIn && <li>
            <NavLink to="/events/new" className={({isActive})=>isActive ?classes.active : undefined}>New Event</NavLink>
          </li>

          }
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
