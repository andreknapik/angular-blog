import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFeatured'
})
export class FilterFeaturedPipe implements PipeTransform {
  transform(posts: any[], isFeatured: boolean): any[] {
    return posts.filter(post => post.isFeatured === isFeatured);
  }
}
