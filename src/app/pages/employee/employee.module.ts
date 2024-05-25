import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { EmployeeService } from '@services/employee.service';
import { SharedModule } from '@shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
const components = [
  EmployeeComponent,
  EmployeeListComponent,
  EmployeeFormComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    TableModule,
    InputTextModule,
    MultiSelectModule,
    DropdownModule,
    InputIconModule,
    TagModule,
    IconFieldModule,
    ButtonModule,
    SharedModule
  ],
  providers: [EmployeeService],
})
export class EmployeeModule { }