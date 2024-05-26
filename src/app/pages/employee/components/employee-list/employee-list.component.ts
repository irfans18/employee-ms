import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '@services/employee.service';
import { Table } from 'primeng/table';
import { IEmployee } from '../../../../shared/model/employee';
import Swal from 'sweetalert2';

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
    // this.employeeService.deleteById(emp.id as string);
    const timer = setInterval(() => {
      Swal.close();
      clearInterval(timer);
    }, 1500);
    Swal.fire({
      title: 'Delete Employee',
      text: 'Delete employee is not allowed because now is under development',
      icon: 'error',
      iconColor: '#dc3545',
      color: '#fffffe',
      background: '#FF8383',
      // confirmButtonColor: '#dc3545',
      // confirmButtonText: 'OK',
      showConfirmButton: false,

    }).then(res => {
    });
  }

  editEmployee(employee: IEmployee) {
    // this.employeeService.edit(employee);
    const timer = setInterval(() => {
      Swal.close();
      clearInterval(timer);
    }, 1500);
    Swal.fire({
      title: 'Edit Employee',
      text: 'Edit employee is not allowed because now is under development',
      icon: 'error',
      iconColor: '#000',
      color: '#000',
      background: '#EFEF8D',
      // confirmButtonColor: '#dc3545',
      // confirmButtonText: 'OK',
      showConfirmButton: false,
      timer: 1500
    }).then(res => {
    });
  }

  // addEmployee(employee: IEmployee) {
  //   this.employeeService.create(employee);
  // }
  gotoDetails(employee: IEmployee) {
    this.router.navigateByUrl(`/employee/${employee.id}`);
  }
}
