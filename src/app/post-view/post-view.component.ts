import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {
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
  postSubscription: Subscription;

  constructor(private postService: PostService) {
    setTimeout(
      () => {
        this.isAuth = true;
      },
      4000
    );
  }

  ngOnInit(): void {
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts: any[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPostSubject();
  }

  onLikeAll(): void {
    this.postService.likeAll();
  }

  onDislikeAll(): void {
    this.postService.dislikeAll();
  }

  onSave(): void {
    this.postService.savePostToServer();
  }

  onFetch(): void {
    this.postService.getPostFromServer();
  }
}
