import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { TickersSyncAction } from './tickers.actions';

export interface ITickerItem {
  symbol: string;
  timestamp: number;
  datetime: Date;
  high: number;
  low: number;
  bid: number;
  bidVolume: number;
  ask: number;
  askVolumn: number;
  vwap: number;
  open: number;
  close: number;
  last: number;
  change: number;
  percentage: number;
  average: number;
  baseVolume: number;
  quoteVolume: number;
};

export class TickersStateModel {
  public items!: ITickerItem[];
  public lastUpdate!: null | Date;
  public status!: string;
}

const defaults = {
  items: [],
  lastUpdate: null,
  status: "IDLE"
};

@State<TickersStateModel>({
  name: 'tickers',
  defaults
})
@Injectable()
export class TickersState {
  @Action(TickersSyncAction)
  sync({ getState, setState }: StateContext<TickersStateModel>) {
    setState({...getState(), status: "PENDING"});
    fetch(
      `${environment.apiUrl}/tickers`).then(
        (response) => {
          response.json().then(
            (data: ITickerItem[]) => {
              setState({
                ...getState(),
                status: "SUCCESS",
                items: data
              });
            }
          )
        }
      );
  }
}
