import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Slice'
})
export class SlicePipe implements PipeTransform {

  transform(value: any, args?: number): any {

    let str ='';
  
    for(let i = args; i < value.length ; i++)
    {
      str += value.charAt(i);
    }

    return str;
  }

}
