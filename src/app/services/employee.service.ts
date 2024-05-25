import { Injectable } from '@angular/core';
import * as employees from '@assets/data/employee.json';
import { ICommonResponse } from '@shared/model/common-response';
import { IEmployee } from '@shared/model/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  data!: ICommonResponse<IEmployee[]>;
  constructor() {
    this.data = employees;
  }

  getAll() {
    return this.data.data;
  }

  getById(id: string) {
    return this.data.data.find((emp) => emp.id === id);
  }

  deleteById(id: string) {
    this.data.data = this.data.data.filter((emp) => emp.id !== id);
  }
  editEmployee(employee: IEmployee) {
    this.data.data = this.data.data.map((emp) => emp.id === employee.id ? employee : emp);
  }

}