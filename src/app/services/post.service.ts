import {Subject} from 'rxjs';

export class PostService {

  postSubject = new Subject<any[]>();

  private posts = [
    {
      id: 1,
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, diam ut auctor congue, arcu urna hendrerit risus, vitae convallis risus nulla eu odio.',
      loveIts: 1,
    },
    {
      id: 2,
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, diam ut auctor congue, arcu urna hendrerit risus, vitae convallis risus nulla eu odio.',
      loveIts: 0,
    },
    {
      id: 3,
      title: 'Mon troisième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, diam ut auctor congue, arcu urna hendrerit risus, vitae convallis risus nulla eu odio.',
      loveIts: -1,
    }
  ];

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

  addPost(title: string, content: string, loveIts: number): void{
    const postObject = {
      id: 0,
      title: '',
      content: '',
      loveIts: 0
    };
    postObject.title = title;
    postObject.content = content;
    postObject.loveIts = loveIts;
    postObject.id = this.posts[(this.posts.length - 1)].id + 1;

    this.posts.push(postObject);
    this.emitPostSubject();
  }
}
