import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class DataService {

  private msgService = new BehaviorSubject<string>('Default Msg from Service !');
  currentMsg = this.msgService.asObservable();

  constructor() { }

  changeMsg(msg: string) {
    this.msgService.next(msg);
  }
}







