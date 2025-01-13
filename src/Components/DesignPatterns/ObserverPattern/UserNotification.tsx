//observes notification service by subscribing to it
import React, { useEffect, useState } from 'react';
import { notificationService } from './NotificationService';
 
export const UserNotification: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
 
  useEffect(() => {
    // Observer function
    const handleNewMessage = (message: string) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };
 
    // Subscribe to notifications
    notificationService.subscribe(handleNewMessage);
 
    // Cleanup on unmount
    //this part of use effect i.e., the return statement, is used for cleanup fucntion/garbage collector
    //this is just part of the definition and not executed each time the state change or notification subscribe event is fired, in this case.
    //when the component is unmounted from the dom, may be based on some conditions, if this unsubscribe is not written, each time the message in admin panel changes, this observer function will be hit.
    //also withou this clean up, if the component is re-mounted (unmount and mount again may be based on condition like login/logout),
    //  then new subscriptions will be created without removing the old ones. This can lead to duplicate listeners,
    //  causing the same callback to execute multiple times for a single event.
    //Also, without this, The callback might attempt to update the state (setMessages) on an unmounted component, resulting in warnings like:Warning: Can't perform a React state update on an unmounted component.
    return () => {
      notificationService.unsubscribe(handleNewMessage);
    };
  }, []);
 
  return (
<div style={"border"}>
<h3>User Notifications</h3>
<ul>
        {messages.map((msg, index) => (
<li key={index}>{msg}</li>
        ))}
</ul>
</div>
  );
};