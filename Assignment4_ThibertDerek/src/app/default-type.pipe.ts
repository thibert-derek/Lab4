import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './content-card/content-card-helper';

@Pipe({
  name: 'defaultType'
})
export class DefaultTypePipe implements PipeTransform {

  transform(content: Content, defaultType: string = 'Novel'): string {
    return content.type || defaultType;
  }

}
