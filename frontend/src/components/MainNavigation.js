import classes from "./MainNavigation.module.css";
import { NavLink, Form, useRouteLoaderData } from "react-router-dom";
import NewsletterSignup from "./NewsletterSignup";
function MainNavigation() {
  const isLoggedIn = useRouteLoaderData("root");
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="/events"
            >
              Event
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="/newsletter"
            >
              NewsLetter
            </NavLink>{" "}
          </li>
          {!isLoggedIn && (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                to="/auth?mode=signup"
              >
                Login/Signup
              </NavLink>{" "}
            </li>
          )}

          {
            isLoggedIn && <li>
            <Form action="/logout" method="post">
              <button>Logout</button>
            </Form>
          </li>
          }
        </ul>
      </nav>
      <NewsletterSignup></NewsletterSignup>
    </header>
  );
}

export default MainNavigation;
