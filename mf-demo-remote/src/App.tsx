import { NavLink } from 'react-router';
import './App.css';
import { page1Route, page2Route } from './routing';

const App = () => {
  return (
    <div className="content">
      <h1>Remote Frontend (MFE)</h1>
      <p>Rsbuild with React</p>
      <p style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <NavLink to={page1Route.path}>
          <button type="button">Page 1</button>
        </NavLink>
        <NavLink to={page2Route.path}>
          <button type="button">Page 2</button>
        </NavLink>
        <button
          type="button"
          onClick={() => {
            window.location.href = '/';
          }}
        >
          Exit
        </button>
      </p>
    </div>
  );
};

export default App;
