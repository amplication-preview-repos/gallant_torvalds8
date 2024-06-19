import { Employee } from "../employee/Employee";

export type Payroll = {
  createdAt: Date;
  employee?: Employee | null;
  id: string;
  month: string | null;
  salary: number | null;
  updatedAt: Date;
  year: number | null;
};
