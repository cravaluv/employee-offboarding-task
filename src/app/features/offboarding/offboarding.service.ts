import {Injectable} from '@angular/core';
import {Employee, EmployeeStatus} from './offboarding.model';
import {BehaviorSubject, map, Observable, tap} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {formatStatus} from '../../shared/utils/string.utils';

@Injectable({
  providedIn: 'root',
})
export class OffboardingService {

  private employeesSubject = new BehaviorSubject<Employee[]>([]);
  private apiURL = '';
  employees$ = this.employeesSubject.asObservable();

  constructor(private http: HttpClient) {}

  fetchEmployees(): void {
    this.http.get<Employee[]>(`${this.apiURL}/employees`)
      .pipe(
        map(employees =>
          employees.map(employee => ({
            ...employee,
            status: formatStatus(employee.status),
          }))
        ),
        tap(employees => {
          this.employeesSubject.next(employees);
        })
      )
      .subscribe({
        error: (err) => console.error('Error fetching employees:', err)
      });
  }

  fetchEmployeeDetails(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiURL}/employees/${id}`);
  }

  offboardEmployee(id: number, body: any): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiURL}/employees/${id}/offboard`, body)
      .pipe(
        tap(() => {
          const employees = this.employeesSubject.getValue();
          const index = employees.findIndex(emp => emp.id === id);
          if (index !== -1) {
            employees[index].status = EmployeeStatus.OFFBOARDED;
            this.employeesSubject.next([...employees]);
          }
        })
      );
  }
}
