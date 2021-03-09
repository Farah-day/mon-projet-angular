import {Component, Input, OnInit} from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  iLoveIt(): void {
    this.postStatus += 1;
  }

  iDontLoveIt(): void{
    this.postStatus -= 1;
  }
}
