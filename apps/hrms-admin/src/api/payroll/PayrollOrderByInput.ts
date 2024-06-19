import { SortOrder } from "../../util/SortOrder";

export type PayrollOrderByInput = {
  createdAt?: SortOrder;
  employeeId?: SortOrder;
  id?: SortOrder;
  month?: SortOrder;
  salary?: SortOrder;
  updatedAt?: SortOrder;
  year?: SortOrder;
};
