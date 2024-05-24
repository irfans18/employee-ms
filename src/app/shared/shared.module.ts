import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenubarModule } from 'primeng/menubar';

const components = [
  HeaderComponent,
  FooterComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MenubarModule
  ],
  exports: [...components]
})
export class SharedModule { }
