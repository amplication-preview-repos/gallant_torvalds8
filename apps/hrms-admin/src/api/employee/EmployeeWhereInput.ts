import { AttendanceListRelationFilter } from "../attendance/AttendanceListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LeaveListRelationFilter } from "../leave/LeaveListRelationFilter";
import { PayrollListRelationFilter } from "../payroll/PayrollListRelationFilter";

export type EmployeeWhereInput = {
  attendances?: AttendanceListRelationFilter;
  dateOfBirth?: DateTimeNullableFilter;
  dateOfJoining?: DateTimeNullableFilter;
  designation?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  leaves?: LeaveListRelationFilter;
  name?: StringNullableFilter;
  payrolls?: PayrollListRelationFilter;
  phone?: StringNullableFilter;
};
