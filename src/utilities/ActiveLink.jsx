import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? 'text-blue-500' : '')}
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;
