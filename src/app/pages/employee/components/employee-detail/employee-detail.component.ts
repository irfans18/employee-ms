import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '@services/employee.service';
import { IEmployee } from '@shared/model/employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.scss'
})
export class EmployeeDetailComponent implements OnInit {
  id:string | null = '';
  emp: IEmployee = {} as IEmployee;
  backQuery: any = {};
  constructor(
    private readonly route: ActivatedRoute,
    private readonly location: Location,
    private readonly employeeService: EmployeeService
  ) { 
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.emp = this.employeeService.getById(this.id as string) as IEmployee;
    this.route.snapshot.data
    // this.backQuery = this.router.getCurrentNavigation()?.previousNavigation?.queryParams;
    console.log(this.route.snapshot.data);
  }

  goBack() {
    this.location.back();
  }
}
