import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { EmployeeTitle } from "../employee/EmployeeTitle";

export const PayrollCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="Employee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <TextInput label="month" source="month" />
        <NumberInput label="salary" source="salary" />
        <NumberInput step={1} label="year" source="year" />
      </SimpleForm>
    </Create>
  );
};
