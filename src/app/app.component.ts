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

  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'TV',
      status: 'allumé'
    },
    {
      name: 'PC',
      status: 'éteint'
    }];

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
