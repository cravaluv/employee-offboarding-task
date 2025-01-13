import {EmployeeStatus} from '../../features/offboarding/offboarding.model';

export function formatStatus(status: string): EmployeeStatus {
  const statusMap: { [key: string]: EmployeeStatus } = {
    'ACTIVE': EmployeeStatus.ACTIVE,
    'OFFBOARDED': EmployeeStatus.OFFBOARDED,
  };

  return statusMap[status] || (status as EmployeeStatus);
}
