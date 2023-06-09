import { NavLink } from 'react-router-dom';

import classes from '../components/MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={ ({isActive})=> isActive ? classes.active:undefined} >Home</NavLink>
          </li>
          <li>
            <NavLink to="/events" className={ ({isActive})=> isActive ? classes.active:undefined} >Events</NavLink>
          </li>
          <li>
            <NavLink to="/events/:eventId" className={ ({isActive})=> isActive ? classes.active:undefined} >Event Details</NavLink>
          </li>
          <li>
            <NavLink to="/events/new" className={ ({isActive})=> isActive ? classes.active:undefined} 
            end>New Events</NavLink>
          </li>
          <li>
            <NavLink to="/events/<some-id>/edit" className={ ({isActive})=> isActive ? classes.active:undefined} >Edit Events</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
