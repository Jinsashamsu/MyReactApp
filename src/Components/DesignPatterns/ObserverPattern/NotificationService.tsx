type Observer = (message: string) => void;
 
class NotificationService {
  private observers: Observer[] = [];
 
  // Subscribe an observer
  //multiple observers from different component can observe this service function
  //each observer will be
  subscribe(observer: Observer) {
    this.observers.push(observer);
  }
 
  // Unsubscribe an observer
  unsubscribe(observer: Observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }
 
  // Notify all observers
  //multiple observers from different component can observe this service function
  //each observer will be notified
  notify(message: string) {
    this.observers.forEach((observer) => observer(message));
  }
}
 
export const notificationService = new NotificationService();