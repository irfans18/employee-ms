import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idCurrency'
})
export class IdCurrencyPipe implements PipeTransform {

  transform(value: number, currencyCode: string = 'IDR'): string {
    // Convert number to string
    let formattedValue = value.toLocaleString('id-ID');

    // Replace comma with dot
    formattedValue = formattedValue.replace(",", '.');

    // Add currency symbol
    formattedValue = `Rp. ${formattedValue},00`;

    return formattedValue;
  }

}
