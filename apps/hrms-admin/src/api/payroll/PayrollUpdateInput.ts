import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type PayrollUpdateInput = {
  employee?: EmployeeWhereUniqueInput | null;
  month?: string | null;
  salary?: number | null;
  year?: number | null;
};
