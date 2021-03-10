import {User} from '../models/user.model';
import {Subject} from 'rxjs';

export class UserService{
  private users: User[] = [
    {
      firstName: 'Farah',
      lastName: 'Bousaid',
      email: 'farah.bousaid@fujitsu.com',
      drinkPreference: 'jus de pomme',
      hobbies: ['Cinema']
    }
  ];

  userSubject = new Subject<User[]>();

  emitUsers(): void{
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User): void{
    this.users.push(user);
    this.emitUsers();
  }
}
