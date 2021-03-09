export class PostService {
  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, diam ut auctor congue, arcu urna hendrerit risus, vitae convallis risus nulla eu odio.',
      loveIts: 1,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, diam ut auctor congue, arcu urna hendrerit risus, vitae convallis risus nulla eu odio.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon troisième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, diam ut auctor congue, arcu urna hendrerit risus, vitae convallis risus nulla eu odio.',
      loveIts: -1,
      created_at: new Date()
    }
  ];

  likeAll(): void {
    for (const post of this.posts) {
      post.loveIts += 1;
    }
  }

  dislikeAll(): void {
    for (const post of this.posts) {
      post.loveIts -= 1;
    }
  }

  likeOne(index: number): void {
    this.posts[index].loveIts += 1;
  }

  dislikeOne(index: number): void {
    this.posts[index].loveIts -= 1;
  }
}
