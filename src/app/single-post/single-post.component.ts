import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  title = 'Post';
  content = 'Contenu';
  loveIts = 0;

  constructor(private postService: PostService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const champId = 'id';
    const id = this.route.snapshot.params[champId];
    this.title = this.postService.getPostById(+id).title;
    this.content = this.postService.getPostById(+id).content;
    this.loveIts = this.postService.getPostById(+id).loveIts;
  }

}
