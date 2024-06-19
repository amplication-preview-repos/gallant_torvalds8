import { Payroll as TPayroll } from "../api/payroll/Payroll";

export const PAYROLL_TITLE_FIELD = "month";

export const PayrollTitle = (record: TPayroll): string => {
  return record.month?.toString() || String(record.id);
};
