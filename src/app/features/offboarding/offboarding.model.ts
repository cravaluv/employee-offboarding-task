export interface Employee {
  id: number;
  name: string;
  department: string;
  email: string;
  status: EmployeeStatus;
  equipments: Equipment[];
}

export enum EmployeeStatus {
  ACTIVE = 'Active',
  OFFBOARDED = 'Offboarded',
}

export interface Equipment {
  id: string;
  name: string;
}

export interface OffboardEmployee {
  receiver: string;
  email: string;
  phone: string;
  streetLine: string;
  city: string;
  postalCode: string;
  country: string;
  notes: string;
}
