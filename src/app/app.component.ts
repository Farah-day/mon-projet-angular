import {Component, OnInit} from '@angular/core';
import {PostService} from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuth = false;

  lastUpdate = new Promise(
    (resolve) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  );

  posts: any[];

  constructor(private postService: PostService) {
    setTimeout(
      () => {
        this.isAuth = true;
      },
      4000
    );
  }

  ngOnInit(): void {
    this.posts = this.postService.posts;
  }

  onLikeAll(): void {
    this.postService.likeAll();
  }

  onDislikeAll(): void {
    this.postService.dislikeAll();
  }
}
