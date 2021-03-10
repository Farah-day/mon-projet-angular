import {Subject} from 'rxjs';
import {Post} from '../models/post.model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class PostService {

  private posts = [];
  postSubject = new Subject<Post[]>();

  constructor(private httpClient: HttpClient) {
  }

  emitPostSubject(): void{
    this.postSubject.next(this.posts.slice());
  }

  getPostById(id: number): any{
    return this.posts.find(
      (postObject) => {
        return postObject.id === id;
      }
    );
  }

  likeAll(): void {
    for (const post of this.posts) {
      post.loveIts += 1;
    }
    this.emitPostSubject();
  }

  dislikeAll(): void {
    for (const post of this.posts) {
      post.loveIts -= 1;
    }
    this.emitPostSubject();
  }

  likeOne(index: number): void {
    this.posts[index].loveIts = +this.posts[index].loveIts + 1;
    this.emitPostSubject();
  }

  dislikeOne(index: number): void {
    this.posts[index].loveIts -= 1;
    this.emitPostSubject();
  }

  addPost(newPost: Post): void{
    this.posts.push(newPost);
    this.savePostToServer();
    this.emitPostSubject();
  }

  savePostToServer(): void{
    this.httpClient
      .put('https://http-client-mon-projet-angular-default-rtdb.firebaseio.com/posts.json', this.posts)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur de sauvegarde : ' + error);
        }
      );
  }

  getPostFromServer(): void{
    this.httpClient
      .get<any[]>('https://http-client-mon-projet-angular-default-rtdb.firebaseio.com/posts.json')
      .subscribe(
        (response) => {
          this.posts = response;
          this.emitPostSubject();
        },
        (error) => {
          console.log('Erreur de chargement : ' + error);
        }
      );
  }
}
