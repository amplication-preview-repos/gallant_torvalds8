import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PayrollWhereInput = {
  employee?: EmployeeWhereUniqueInput;
  id?: StringFilter;
  month?: StringNullableFilter;
  salary?: FloatNullableFilter;
  year?: IntNullableFilter;
};
