import { AdminPanel } from "./AdminPanel";
import { UserNotification } from "./UserNotification";

/* observer pattern

large application
can be used with redux/context api normally -singleton also,  without also possible */

const ObserverMain: React.FC = () => {
    return (
  <div>
  <h1>Observer Pattern Example</h1>
  <AdminPanel />
  <UserNotification />
  </div>
    );
  };


  export default ObserverMain;