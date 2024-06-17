import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  // initial code after pipe is generated
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(value: string, ...args: unknown[]): string {
    // Example: Reverse the input string
    return value.split('').reverse().join('');
  }

}
