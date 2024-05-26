import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { PaginatorModule } from "primeng/paginator";
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
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
  declarations: [...components, EmployeeDetailComponent],
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
    SharedModule,
    CardModule,
    PaginatorModule,
    FormsModule,
    FloatLabelModule,
    ReactiveFormsModule,
    CalendarModule,
    HttpClientModule,
  ],
  providers: [],
})
export class EmployeeModule { }
