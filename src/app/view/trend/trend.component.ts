import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SchedulerService } from 'src/app/service/scheduler/scheduler.service';

import { TickersSyncAction } from 'src/app/state/tickers/tickers.actions';
import { TickersState, ITickerItem, TickersStateModel } from 'src/app/state/tickers/tickers.state';

@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.scss']
})
export class TrendComponent implements OnInit, OnDestroy {

  schedulerList: [number, () => void][] = [
    [5000, this.syncTickers.bind(this)]
  ]

  @Select(TickersState) tickers$!: Observable<TickersStateModel>;
  tickers!: ITickerItem[];
  tickersLastUpdate!: Date | null;

  constructor(
    private store: Store,
    private schedulerService: SchedulerService
  ) { }

  ngOnInit(): void {
    this.tickers$.subscribe(
      ({ items, lastUpdate, status }) => {
        switch (status) {
          case "SUCCESS":
            this.tickers = items;
            this.tickersLastUpdate = lastUpdate;
            break;
        }
      });

    this.schedulerList.every(
      ([ms, callback]) => {
        this.schedulerService.every(ms, callback);
      });
  }

  ngOnDestroy(): void {
    this.schedulerList.every(
      ([ms, callback]) => {
        this.schedulerService.release(callback);
      }
    );
  }

  syncTickers(): void {
    this.store.dispatch(new TickersSyncAction());
  }
}
