import { IObserver } from "./IObserver";

export interface ISubject {
  register: (observer: IObserver) => void;

  unregister: (observer: IObserver) => void;

  // notifyObservers: () => void;
}
