import { AttendanceUpdateManyWithoutEmployeesInput } from "./AttendanceUpdateManyWithoutEmployeesInput";
import { LeaveUpdateManyWithoutEmployeesInput } from "./LeaveUpdateManyWithoutEmployeesInput";
import { PayrollUpdateManyWithoutEmployeesInput } from "./PayrollUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  attendances?: AttendanceUpdateManyWithoutEmployeesInput;
  dateOfBirth?: Date | null;
  dateOfJoining?: Date | null;
  designation?: string | null;
  email?: string | null;
  leaves?: LeaveUpdateManyWithoutEmployeesInput;
  name?: string | null;
  payrolls?: PayrollUpdateManyWithoutEmployeesInput;
  phone?: string | null;
};
