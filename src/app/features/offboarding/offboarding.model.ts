export interface Employee {
  id: number;
  name: string;
  department: string;
  email: string;
  status: EmployeeStatus;
  equipments: Equipment[];
}

export enum EmployeeStatus {
  Active = 'Active',
  Offboarded = 'Offboarded',
}

export interface Equipment {
  id: string;
  name: string;
}
