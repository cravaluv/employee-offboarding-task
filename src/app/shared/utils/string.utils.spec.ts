import { formatStatus } from './string.utils';
import { EmployeeStatus } from '../../features/offboarding/offboarding.model';

describe('formatStatus', () => {
  it('should return EmployeeStatus.ACTIVE for "ACTIVE" input', () => {
    const result = formatStatus('ACTIVE');
    expect(result).toBe(EmployeeStatus.ACTIVE);
  });

  it('should return EmployeeStatus.OFFBOARDED for "OFFBOARDED" input', () => {
    const result = formatStatus('OFFBOARDED');
    expect(result).toBe(EmployeeStatus.OFFBOARDED);
  });

  it('should return the input as EmployeeStatus if it does not match any key in statusMap', () => {
    const result = formatStatus('UNKNOWN');
    expect(result).toBe('UNKNOWN' as EmployeeStatus);
  });
});
