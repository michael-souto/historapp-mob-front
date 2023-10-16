import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  features: any[] = [
    {id: 1, name: 'Anotações', url:'/annotations', src: 'assets/icon/annotation.png', background: 'rgba(106,100,255, 0.1)', page: ''},
    {id: 2, name: 'Eventos Históricos',url:'/events', src: 'assets/icon/event.png', background: 'rgba(106,100,255, 0.1)', page: ''},
    {id: 3, name: 'Personagens', url:'/characters', src: 'assets/icon/character.png', background: 'rgba(106,100,255, 0.1)', page: ''},
    {id: 4, name: 'Lugares', url:'/locales', src: 'assets/icon/locale.png', background: 'rgba(106,100,255, 0.1)', page: ''},
  ];

  transactions: any[] = [
    {id: 1, vendor: 'Received from PhonePe', image: '', amount: 1500, time: '3:00PM'},
    {id: 2, vendor: 'Flaticons', image: '', amount: -1200, time: '4:00PM'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
