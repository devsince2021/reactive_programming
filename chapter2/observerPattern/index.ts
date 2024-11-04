import { Applicant } from "./Applicant";
import { Company } from "./Company";

export const itCompany = new Company();

const applicant1 = new Applicant(1, "han");
const applicant2 = new Applicant(2, "kim");
const applicant3 = new Applicant(3, "park");

[applicant1, applicant2, applicant3].forEach((applicant) =>
  itCompany.getResume(applicant)
);

setTimeout(() => {
  itCompany.sendResultMessage();
}, 1000);
