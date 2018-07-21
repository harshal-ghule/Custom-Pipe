import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'UpperCase'
})
export class UpperCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let str='';

    for(let i = 0 ; i < value.length ; i++)
    {
      if(value.charAt(i) != ' ')
      {
        if( (value.charCodeAt(i) > 96) && (value.charCodeAt(i) < 123) )
        {
          str += String.fromCharCode(value.charCodeAt(i)-32);
        }
        else
        {
          str += value.charAt(i);
          
        }
        
      }
      else
      {
        str += ' ';
      }

    }
      return str;
  }
}

