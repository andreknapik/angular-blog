import { Component, OnInit } from '@angular/core';
import { dataFake } from './../../data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public fakeData = dataFake;

  constructor() { }

  ngOnInit(): void {
  }

  // Função para filtrar os posts em destaque
  filterFeaturedPosts(posts: any[], isFeatured: boolean): any[] {
    return posts.filter(post => post.isFeatured === isFeatured);
  }
}
