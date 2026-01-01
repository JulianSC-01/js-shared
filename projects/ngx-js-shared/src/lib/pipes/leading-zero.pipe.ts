import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appLeadingZero'
})
export class LeadingZeroPipe
  implements PipeTransform {
  transform(value: number, desiredLength = 2) {
    const fixedValue =
      Math.abs(value).toFixed();
    const fixedValueLength =
      fixedValue.length;

    desiredLength =
      desiredLength > 10 ? 10 : desiredLength;

    if (fixedValueLength >= desiredLength) {
      return fixedValue;
    } else {
      return `${'0'.repeat(
        desiredLength - fixedValueLength)}${fixedValue}`;
    }
  }
}
