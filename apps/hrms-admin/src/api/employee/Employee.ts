import { Attendance } from "../attendance/Attendance";
import { Leave } from "../leave/Leave";
import { Payroll } from "../payroll/Payroll";

export type Employee = {
  attendances?: Array<Attendance>;
  createdAt: Date;
  dateOfBirth: Date | null;
  dateOfJoining: Date | null;
  designation: string | null;
  email: string | null;
  id: string;
  leaves?: Array<Leave>;
  name: string | null;
  payrolls?: Array<Payroll>;
  phone: string | null;
  updatedAt: Date;
};
