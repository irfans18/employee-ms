import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenubarModule } from 'primeng/menubar';
import { IdCurrencyPipe } from './pipes/id-currency.pipe';

const components = [
  HeaderComponent,
  FooterComponent,
];

const pipes = [
  IdCurrencyPipe
];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [
    CommonModule,
    MenubarModule,
  ],
  exports: [...components,...pipes]
})
export class SharedModule { }
