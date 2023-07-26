import { Component, OnInit } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.component.html',
  
})
export class WordPressComponent implements OnInit {
  posts: any[] = [] ;

  constructor(private wordpressService: WordpressService) { }

  ngOnInit() {
    // Fetch WordPress posts
    this.wordpressService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
