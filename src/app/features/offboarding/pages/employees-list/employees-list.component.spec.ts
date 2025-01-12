import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesListComponent } from './employees-list.component';
import {Employee} from '../../offboarding.model';
import {OffboardingService} from '../../offboarding.service';

describe('EmployeesListComponent', () => {
  let component: EmployeesListComponent;
  let fixture: ComponentFixture<EmployeesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesListComponent],
      providers: [OffboardingService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.employees = [
      { name: 'John Doe', department: 'Engineering' },
      { name: 'Jane Smith', department: 'Marketing' }
    ] as Employee[];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('applyFilter', () => {
    it('should initialize with all employees when no filter is applied', () => {
      component.applyFilter();

      expect(component.filteredEmployees.length).toBe(2);
      expect(component.filteredEmployees).toEqual(component.employees);
    });

    it('should filter employees based on filterValue from event', () => {
      const event = {
        target: { value: 'john' }
      }  as unknown as Event;

      component.applyFilter(event);

      expect(component.filteredEmployees.length).toBe(1);
      expect(component.filteredEmployees[0].name).toBe('John Doe');
    });

    it('should filter employees based on name and department (case insensitive)', () => {
      const event = {
        target: { value: 'engineering' }
      } as unknown as Event;

      component.applyFilter(event);

      expect(component.filteredEmployees.length).toBe(1);
      expect(component.filteredEmployees[0].department).toBe('Engineering');
    });

    it('should set filteredEmployees to all employees if filterValue is empty', () => {
      component.filterValue = '';
      component.applyFilter();

      expect(component.filteredEmployees.length).toBe(2);
      expect(component.filteredEmployees).toEqual(component.employees);
    });
  })
});
