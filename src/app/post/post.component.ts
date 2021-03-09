import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postStatus: number;
  @Input() postDate: Date;
  @Input() indexOfPost: number;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  onLike(): void{
    this.postService.likeOne(this.indexOfPost);
  }

  onDislike(): void{
    this.postService.dislikeOne(this.indexOfPost);
  }
}
