import { IObserver } from "./IObserver";

export class Applicant implements IObserver {
  constructor(private id: number, private name: string) {}

  public getName() {
    return this.name;
  }

  public getId() {
    return this.id;
  }

  public notify(message: string) {
    console.log(`${this.name}: >> ${message}`);
  }
}
