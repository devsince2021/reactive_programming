import { Applicant } from "./Applicant";
import { IObserver } from "./IObserver";
import { ISubject } from "./ISubject";

export class Company implements ISubject {
  private applicants: IObserver[];

  constructor() {
    this.applicants = [];
  }

  // private
  register(observer: IObserver) {
    this.applicants.push(observer);
  }

  // private
  unregister(observer: IObserver) {
    const newApplicants = this.applicants.filter(
      (applicants) => applicants === observer
    );

    this.applicants = newApplicants;
  }

  public getResume(applicant: Applicant) {
    this.register(applicant);
  }

  public sendResultMessage() {
    this.applicants.forEach((applicant) =>
      applicant.notify("U passed 1st step!")
    );
  }
}
