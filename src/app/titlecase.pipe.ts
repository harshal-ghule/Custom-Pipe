import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'TitleCase'
})
export class TitlecasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    let str = '';
  
     str = value.charAt(0).toUpperCase();

   for(let i = 1; i < value.length ; i++)
    {
      if(value.charAt(i) == ' ')
      {
        str += ' ';
        str += value.charAt(++i).toUpperCase();
      }
      else
      {
        str += value.charAt(i);
      }
    }


    return str;
  }

}
