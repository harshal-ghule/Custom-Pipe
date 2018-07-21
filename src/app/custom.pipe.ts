import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, ...args): any {

    let str = value;

    switch(args[0])
    {
      case 'lowercase' : return str.toLowerCase();
      
      case 'uppercase' : return str.toUpperCase();

    }
    
  }

  
}
