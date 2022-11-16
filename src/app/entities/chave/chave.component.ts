import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { ITime, Time } from 'src/app/model/time.model';

@Component({
  selector: 'chave',
  templateUrl: './chave.component.html',
  styleUrls: ['./chave.component.scss'],
})
export class ChaveComponent implements OnInit, OnDestroy {
  @Input()
  chave?: string;

  @Input() events!: Observable<void>;

  @Output() sendKeys: EventEmitter<ITime[]> = new EventEmitter();

  private eventsSubscription?: Subscription;

  times?: ITime[] = [];

  @Input()
  timesValues?: ITime[]

  constructor(private fb: FormBuilder) {}

  editForm = this.fb.group({
    time1: [null],
    forca1: [null],
    time2: [null],
    forca2: [null],
    time3: [null],
    forca3: [null],
    time4: [null],
    forca4: [null],
  });

  ngOnInit(): void {
    this.eventsSubscription = this.events.subscribe(() => this.gerarChave());
  }

  gerarChave() {
    const time1 = {
      ...(this.editForm.get('time1')?.value as unknown as Time),
      grupo: this.chave,
    } as Time;
    const time2 = {
      ...(this.editForm.get('time2')?.value as unknown as Time),
      grupo: this.chave,
    } as Time;
    const time3 = {
      ...(this.editForm.get('time3')?.value as unknown as Time),
      grupo: this.chave,
    } as Time;
    const time4 = {
      ...(this.editForm.get('time4')?.value as unknown as Time),
      grupo: this.chave,
    } as Time;

    this.times?.push(time1, time2, time3, time4);

    this.sendKeys.emit(this.times);
  }

  ngOnDestroy(): void {}
}
