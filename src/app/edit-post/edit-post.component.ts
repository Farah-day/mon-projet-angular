import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostService} from '../services/post.service';
import {Router} from '@angular/router';
import {Post} from '../models/post.model';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  defaultLoveIts = 0;

  constructor(private postService: PostService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(formulaire: NgForm): void {
    const champTitle = 'title';
    const title = formulaire.value[champTitle];
    const champPostContent = 'postContent';
    const postContent = formulaire.value[champPostContent];
    const champLoveIts = 'loveIts';
    const loveIts = formulaire.value[champLoveIts];

    const newPost = new Post(title, postContent, loveIts);
    this.postService.addPost(newPost);
    this.router.navigate(['/posts']);
  }
}
