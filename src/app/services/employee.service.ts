import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { ICommonResponse } from '@shared/model/common-response';
import { IEmployee } from '@shared/model/employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeesSubject = new BehaviorSubject<IEmployee[]>([]);
  public employees$ = this.employeesSubject.asObservable();
  private initialized = false;

  constructor(private http: HttpClient) {
    this.initialize();
  }
  initialize(): void {
    if (!this.initialized) {
      this.loadEmployeesFromJson();
      this.initialized = true;
    }
  }
  private loadEmployeesFromJson(): void {
    this.http.get<any>('assets/data/employee.json') 
      .pipe(
        map(response => response.data)
      )
      .subscribe(employees => {
        this.employeesSubject.next(employees);
      });
  }

  getAll(): IEmployee[] {
    return this.employeesSubject.getValue();
  }

  getById(employeeId: string): IEmployee | undefined {
    return this.getAll().find(employee => employee.id === employeeId);
  }

  setEmployees(employees: IEmployee[]): void {
    this.employeesSubject.next(employees);
  }

  create(employee: Omit<IEmployee, 'id'>): void {
    const currentEmployees = this.getAll();
    currentEmployees.push({...employee, id: new Date().getTime().toString()});
    this.setEmployees(currentEmployees);
  }

  deleteById(employeeId: string): void {
    let currentEmployees = this.getAll();
    currentEmployees = currentEmployees.filter(emp => emp.id !== employeeId);
    this.setEmployees(currentEmployees);
  }

  edit(employee: IEmployee): void {
    let currentEmployees = this.getAll();
    const index = currentEmployees.findIndex(emp => emp.id === employee.id);
    if (index !== -1) {
      currentEmployees[index] = employee;
      this.setEmployees(currentEmployees);
    }
  }
}