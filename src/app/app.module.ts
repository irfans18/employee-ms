import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { EmployeeService } from '@services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { GroupService } from '@services/group.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    SweetAlert2Module.forRoot(),
    HttpClientModule,
  ],
  providers: [EmployeeService, GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
