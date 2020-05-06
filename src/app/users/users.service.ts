import { Injectable, EventEmitter } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users = [

    new User(912346, 'Mahmoud Samy',
      'none',
      'mahmoudsamy50@outlook.com',
      'Egypt',
      'tanta',
      '22 / 10 / 1996',
      23,
      2324286382527,
      'El-Galaa',
      '01019111816',
      'Visa',
      23720972472042,
      '22/10/2025',
      { offerCount: 5, offers: ['offer1', 'offer2'] },
      { year: 2018, month: 3, day: 12 }),

    new User(197564, 'Mahmoud Samy',
      'none',
      'mahmoudsamy50@outlook.com',
      'Egypt',
      'tanta',
      '22 / 10 / 1996',
      23,
      2324286382527,
      'El-Galaa',
      '01019111816',
      'Visa',
      23720972472042,
      '22/10/2025',
      { offerCount: 5, offers: ['offer1', 'offer2'] },
      { year: 2018, month: 4, day: 12 }),
    new User(654791, 'Mahmoud Samy',
      'none',
      'mahmoudsamy50@outlook.com',
      'Egypt',
      'tanta',
      '22 / 10 / 1996',
      23,
      2324286382527,
      'El-Galaa',
      '01019111816',
      'Visa',
      23720972472042,
      '22/10/2025',
      { offerCount: 5, offers: ['offer1', 'offer2'] },
      { year: 2018, month: 3, day: 12 }),
    new User(347951, 'Mahmoud Samy',
      'none',
      'mahmoudsamy50@outlook.com',
      'Egypt',
      'tanta',
      '22 / 10 / 1996',
      23,
      2324286382527,
      'El-Galaa',
      '01019111816',
      'Visa',
      23720972472042,
      '22/10/2025',
      { offerCount: 5, offers: ['offer1', 'offer2'] },
      { year: 2018, month: 8, day: 12 }),
    new User(264795, 'Mahmoud Samy',
      'none',
      'mahmoudsamy50@outlook.com',
      'Egypt',
      'tanta',
      '22 / 10 / 1996',
      23,
      2324286382527,
      'El-Galaa',
      '01019111816',
      'Visa',
      23720972472042,
      '22/10/2025',
      { offerCount: 5, offers: ['offer1', 'offer2'] },
      { year: 2018, month: 5, day: 12 }),
    new User(657181, 'Mahmoud Samy',
      'panned',
      'mahmoudsamy50@outlook.com',
      'Egypt',
      'tanta',
      '22 / 10 / 1996',
      23,
      2324286382527,
      'El-Galaa',
      '01019111816',
      'Visa',
      23720972472042,
      '22/10/2025',
      { offerCount: 5, offers: ['offer1', 'offer2'] },
      { year: 2018, month: 8, day: 12 }),
    new User(758477, 'Mahmoud Samy',
      'active',
      'mahmoudsamy50@outlook.com',
      'Egypt',
      'tanta',
      '22 / 10 / 1996',
      23,
      2324286382527,
      'El-Galaa',
      '01019111816',
      'Visa',
      23720972472042,
      '22/10/2025',
      { offerCount: 5, offers: ['offer1', 'offer2'] },
      { year: 2018, month: 12, day: 12 }),

  ];

  usersChanged = new EventEmitter<User[]>();

  constructor(private http: HttpClient) { }

  fetchUsers(): Observable<object> {
    // this function gets data but there is no component use it till now
    // TODO I still need to post data to an api to edit it
    return this.http.get('/assets/users.json');
  }

  getAllUsers() {
    // console.log(JSON.stringify(this.users));

    return this.users;
  }

  getUserByID(id: number) {

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].userID === id) {
        return this.users[i];
      }
    }
  }

  updateUserByID(id: number, user: User) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].userID === id) {
        this.users[i] = user;
      }
    }
  }
}
