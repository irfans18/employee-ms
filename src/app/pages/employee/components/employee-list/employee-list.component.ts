import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '@services/employee.service';
import { Table } from 'primeng/table';
import { IEmployee } from '../../../../shared/model/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit, AfterViewInit {
  loading: boolean = true;
  @Input() searchValue: string = '';
  @ViewChild('dt1') table: any;

  employees: IEmployee[] = [];
  first = 0;
  rows = 10;
  currentPage = 1;
  query: any = {};

  constructor(
    private employeeService: EmployeeService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,

  ) {

  }


  ngAfterViewInit(): void {
    console.log('Table:', this.table);
  }

  ngOnInit(): void {
    this.employeeService.employees$.subscribe(employees => {
      this.employees = employees;
    });
    this.loading = false;
    this.route.queryParams.subscribe(params => {
      this.query.search = params['search'] || '';
      this.searchValue = this.query.search;
      this.query.page = params['page'] || 1;
      this.query.size = params['size'] || this.rows;
    });
  }


  pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.query.page = (this.first / this.rows) + 1;
    this.router.navigate(['/employee'], { queryParams: this.query });
  }

  filterGlobal(table: Table, event: Event) {
    const input = event.target as HTMLInputElement;
    table.filterGlobal(input.value, 'contains');
    this.query.search = input.value;
    this.query.page = 1;
    this.query.size = this.rows;
    this.router.navigate(['/employee'], { queryParams: this.query });
  }

  clear(table: Table) {
    table.clear();
    this.searchValue = '';
    this.router.navigate(['/employee']);
  }
  deleteEmployee(emp: IEmployee) {
    this.employeeService.deleteById(emp.id as string);
  }

  editEmployee(employee: IEmployee) {
    this.employeeService.edit(employee);
  }

  addEmployee(employee: IEmployee) {
    this.employeeService.create(employee);
  }
  gotoDetails(employee: IEmployee) {
    this.router.navigateByUrl(`/employee/${employee.id}`);
  }
}
