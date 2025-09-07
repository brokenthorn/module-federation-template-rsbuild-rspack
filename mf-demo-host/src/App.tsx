import { NavLink } from 'react-router';
import './App.css';
import React from 'react';
import { eventNotificationFeRoute, page1Route, page2Route } from './routing';

const RemoteButton = React.lazy(() => import('mf_demo_remote/button'));

const App = () => {
  return (
    <div className="content">
      <h1>Host Frontend</h1>
      <p>Rsbuild with React</p>
      <p style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <NavLink to={page1Route.path}>
          <button type="button">Page 1</button>
        </NavLink>
        <NavLink to={page2Route.path}>
          <button type="button">Page 2</button>
        </NavLink>
      </p>
      <p>
        <NavLink to={eventNotificationFeRoute.pathname}>
          <button type="button">
            Event Notification MFE (via module federation)
          </button>
        </NavLink>
      </p>
      <p>
        The above button mounts and entire MFE in a framework agnostic way,
        <br />
        but if the host and remote have compatible frameworks, other modules,
        such as components, can be federated too.
        <p></p>
        Here is a button component imported from a remote and rendered here on
        the host:
      </p>
      <p>
        <RemoteButton />
      </p>
      <p>Same button again, but using props:</p>
      <p>
        <RemoteButton>
          Same button, but now using props (children) to set the button content
        </RemoteButton>
      </p>
    </div>
  );
};

export default App;
