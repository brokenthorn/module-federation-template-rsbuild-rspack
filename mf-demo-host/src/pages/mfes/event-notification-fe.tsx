import { useEffect, useRef } from 'react';
import { eventNotificationFeRoute } from '../../routing';

/** Event Notification Frontend Mounter Component. */
export const EventNotificationFe = () => {
  const ref = useRef<HTMLDivElement>(null);
  const importModule = () => import('mf_demo_remote/mfe-mount');

  useEffect(() => {
    let unmountMfe: () => void;

    importModule()
      .then(({ mount, unmount }) => {
        if (!ref.current) {
          throw new Error(
            'Cannot mount Event Notification FE: the Element ref was undefined (not bound)',
          );
        }
        unmountMfe = unmount;
        ref.current.innerText = ''; // remove loading message
        ref.current.className = ''; // remove the styles used for the loading msg
        mount(ref.current, eventNotificationFeRoute.pathname);
      })
      .catch((error) => {
        console.error(error);
        if (ref.current) {
          if (error instanceof Error) {
            ref.current.innerHTML = `<p>${error.name}: ${error.message}</p>`;
          } else {
            ref.current.innerHTML = `<p>Cannot mount Event Notification FE: Unknown error</p>`;
          }
        }
      });

    return () => {
      if (unmountMfe) unmountMfe();
    };
  }, []);

  return (
    <div className="content" ref={ref}>
      <h1 style={{ textAlign: 'center' }}>Loading...</h1>
    </div>
  );
};
