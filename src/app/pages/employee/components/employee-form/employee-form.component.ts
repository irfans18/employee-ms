import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '@services/employee.service';
import { GroupService } from '@services/group.service';
import { IGroup } from '@shared/model/group';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss'
})
export class EmployeeFormComponent implements OnInit {
  createForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    firstName: new FormControl('', [Validators.required, Validators.minLength(1)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(1)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthDate: new FormControl('', [Validators.required, Validators.minLength(1)]),
    basicSalary: new FormControl('', [Validators.required, Validators.minLength(1)]),
    status: new FormControl('', [Validators.required, Validators.minLength(1)]),
    group: new FormControl('', [Validators.required, Validators.minLength(1)]),
    description: new FormControl('', [Validators.required, Validators.minLength(1)]),
  })

  groups: IGroup[];
  maxDate: Date | undefined;
  @Input() description = new Date().toDateString();
  @Input() selectedGroup: string = '';

  constructor(
    private readonly router: Router,
    private readonly groupService: GroupService,
    private readonly employeeService: EmployeeService,
  ) {
    this.groups = this.groupService.getAll();
  }
  ngOnInit(): void {
    this.maxDate = new Date();
  }

  onSubmit() {
    console.log(this.createForm.value);
    if (this.createForm.valid) {
      const emp = { ...this.createForm.value };
      emp.id = new Date().getTime().toString();
      console.log(emp);
      this.employeeService.create(emp);
      Swal.fire('Good job!', 'Successfully added record!', 'success');
      this.router.navigate(['/employee']);
    } else {
      Swal.fire('Oops!', "Something went wrong!", 'warning');
    }
  }
  goBack() {
    this.router.navigate(['/employee']);
  }
}
