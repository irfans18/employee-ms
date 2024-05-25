import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from '@services/employee.service';
import { IEmployee } from '../../../../shared/model/employee';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  providers: [EmployeeService],
})
export class EmployeeListComponent implements OnInit {
  loading: boolean = true;
  @Input() searchValue: string = '';
  employees: IEmployee[] = [];
  first = 0;
  rows = 10;

  constructor(private employeeService: EmployeeService) { }

  pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  filterGlobal(table: Table, event: Event) {
    const input = event.target as HTMLInputElement;
    table.filterGlobal(input.value, 'contains');
  }

  ngOnInit(): void {
    this.employees = this.employeeService.getAll();
    this.loading = false;
  }

  clear(table: Table) {
    table.clear();
    this.searchValue = '';
  }
  deleteEmployee(employee: IEmployee) {
    this.employees = this.employees.filter((emp) => emp.id !== employee.id);
    this.employeeService.deleteById(employee.id as string);
  }
  editEmployee(employee: IEmployee) {
    this.employees = this.employees.map((emp) => emp.id === employee.id ? employee : emp);
  }
}
