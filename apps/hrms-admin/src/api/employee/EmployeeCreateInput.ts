import { AttendanceCreateNestedManyWithoutEmployeesInput } from "./AttendanceCreateNestedManyWithoutEmployeesInput";
import { LeaveCreateNestedManyWithoutEmployeesInput } from "./LeaveCreateNestedManyWithoutEmployeesInput";
import { PayrollCreateNestedManyWithoutEmployeesInput } from "./PayrollCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  attendances?: AttendanceCreateNestedManyWithoutEmployeesInput;
  dateOfBirth?: Date | null;
  dateOfJoining?: Date | null;
  designation?: string | null;
  email?: string | null;
  leaves?: LeaveCreateNestedManyWithoutEmployeesInput;
  name?: string | null;
  payrolls?: PayrollCreateNestedManyWithoutEmployeesInput;
  phone?: string | null;
};
