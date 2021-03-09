import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      },
      4000
    );
  }

  onAllumer(): void {
    console.log('On allume tout !');
  }
}
