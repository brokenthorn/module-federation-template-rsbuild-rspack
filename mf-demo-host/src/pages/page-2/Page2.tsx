import { NavLink } from 'react-router';
import { homeRoute } from '../../routing';

const Page2 = () => {
  return (
    <div className="content">
      <h1>Host Frontend - Page 2</h1>
      <p>Rsbuild with React</p>
      <p>
        <NavLink to={homeRoute.path}>
          <button type="button">Home</button>
        </NavLink>
      </p>
    </div>
  );
};

export default Page2;
