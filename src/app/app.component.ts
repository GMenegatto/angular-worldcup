import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ITime, Time } from './model/time.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  times?: ITime[] = [];

  eventsSubject: Subject<void> = new Subject<void>();

  timesValue?: ITime[] = [
    {
      time: 'Catar',
      grupo: 'A',
      forca: 7.01,
      fifa: 1439.89,
    } as Time,
    {
      time: 'Equador',
      grupo: 'A',
      forca: 6.79,
      fifa: 1464.39,
    } as Time,
    {
      time: 'Senegal',
      grupo: 'A',
      forca: 6.99,
      fifa: 1584.38,
    } as Time,
    {
      time: 'Holanda',
      grupo: 'A',
      forca: 7.24,
      fifa: 1694.51,
    } as Time,

    {
      time: 'Inglaterra',
      grupo: 'B',
      forca: 7.32,
      fifa: 1728.47,
    } as Time,
    {
      time: 'Irã',
      grupo: 'B',
      forca: 6.77,
      fifa: 1564.61,
    } as Time,
    {
      time: 'Estados Unidos',
      grupo: 'B',
      forca: 7.03,
      fifa: 1627.48,
    } as Time,
    {
      time: 'País de Gales',
      grupo: 'B',
      forca: 6.96,
      fifa: 1569.82,
    } as Time,

    {
      time: 'Argentina',
      grupo: 'C',
      forca: 6.98,
      fifa: 1773.88,
    } as Time,
    {
      time: 'Arábia Saudita',
      grupo: 'C',
      forca: 6.66,
      fifa: 1437.78,
    } as Time,
    {
      time: 'México',
      grupo: 'C',
      forca: 7.1,
      fifa: 1644.89,
    } as Time,
    {
      time: 'Polônia',
      grupo: 'C',
      forca: 7.02,
      fifa: 1548.59,
    } as Time,

    {
      time: 'França',
      grupo: 'D',
      forca: 7.1,
      fifa: 1759.78,
    } as Time,
    {
      time: 'Austrália',
      grupo: 'D',
      forca: 6.86,
      fifa: 1488.72,
    } as Time,
    {
      time: 'Dinamarca',
      grupo: 'D',
      forca: 7.1,
      fifa: 1666.57,
    } as Time,
    {
      time: 'Tunísia',
      grupo: 'D',
      forca: 6.82,
      fifa: 1507.54,
    } as Time,

    {
      time: 'Costa Rica',
      grupo: 'E',
      forca: 7.01,
      fifa: 1503.59,
    } as Time,
    {
      time: 'Alemanha',
      grupo: 'E',
      forca: 7.31,
      fifa: 1650.21,
    } as Time,
    {
      time: 'Japão',
      grupo: 'E',
      forca: 6.6,
      fifa: 1559.54,
    } as Time,
    {
      time: 'Espanha',
      grupo: 'E',
      forca: 7.0,
      fifa: 1715.22,
    } as Time,

    {
      time: 'Bélgica',
      grupo: 'F',
      forca: 7.18,
      fifa: 1816.71,
    } as Time,
    {
      time: 'Canadá',
      grupo: 'F',
      forca: 6.95,
      fifa: 1475,
    } as Time,
    {
      time: 'Marrocos',
      grupo: 'F',
      forca: 6.94,
      fifa: 1563.5,
    } as Time,
    {
      time: 'Croácia',
      grupo: 'F',
      forca: 7.11,
      fifa: 1645.64,
    } as Time,

    {
      time: 'Brasil',
      grupo: 'G',
      forca: 7.15,
      fifa: 1841.3,
    } as Time,
    {
      time: 'Sérvia',
      grupo: 'G',
      forca: 7.03,
      fifa: 1563.62,
    } as Time,
    {
      time: 'Suíça',
      grupo: 'G',
      forca: 7.03,
      fifa: 1635.92,
    } as Time,
    {
      time: 'Camarões',
      grupo: 'G',
      forca: 6.92,
      fifa: 1471.44,
    } as Time,

    {
      time: 'Portugal',
      grupo: 'H',
      forca: 7.06,
      fifa: 1676.56,
    } as Time,
    {
      time: 'Gana',
      grupo: 'H',
      forca: 6.67,
      fifa: 1393,
    } as Time,
    {
      time: 'Uruguai',
      grupo: 'H',
      forca: 6.83,
      fifa: 1638.71,
    } as Time,
    {
      time: 'Coreia do Sul',
      grupo: 'H',
      forca: 6.79,
      fifa: 1530.3,
    } as Time,
  ];

  ngOnInit(): void {}

  public gerar(): void {
    this.eventsSubject.next();
  }

  adicionarTime(times: ITime[]) {
    this.times?.push(...times);

    console.log('Adicionados os times:' + times);
  }

  ngOnDestroy(): void {}
}
