import {Injectable} from '@angular/core';
import {Employee, EmployeeStatus} from './offboarding.model';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OffboardingService {

  private employeesSubject = new BehaviorSubject<Employee[]>([]);
  employees$ = this.employeesSubject.asObservable();

  constructor(private http: HttpClient) {}

  fetchEmployees(): void {
    this.http.get<Employee[]>('/api/employees')
      .subscribe(employees => this.employeesSubject.next(employees));
  }

  fetchEmployeeDetails(id: number): Observable<Employee> {
    return this.http.get<Employee>(`/api/employees/${id}`);
  }

  offboardEmployee(id: number, body: any): Observable<Employee> {
    return this.http.post<Employee>(`/api/employees/${id}/offboard`, body)
      .pipe(
        tap(() => {
          const employees = this.employeesSubject.getValue();
          const index = employees.findIndex(emp => emp.id === id);
          if (index !== -1) {
            employees[index].status = EmployeeStatus.Offboarded;
            this.employeesSubject.next([...employees]);
          }
        })
      );
  }
}
