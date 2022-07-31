import { Injectable } from '@angular/core';

import { interval, Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

  schedulerList: {[name: string]: Subscription} = {};

  constructor() { }

  every(ms: number, callback: () => void) {
    let subj: Subscription = interval(ms).subscribe(callback);
    this.schedulerList[callback.name] = subj;
    callback();
  }

  release(callback: () => void) {
    this.schedulerList[callback.name].unsubscribe();
    delete this.schedulerList[callback.name];
  }
}
