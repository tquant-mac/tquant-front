import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { TrendAction } from './trend.actions';

export class TrendStateModel {
  public items!: string[];
}

const defaults = {
  items: []
};

@State<TrendStateModel>({
  name: 'trend',
  defaults
})
@Injectable()
export class TrendState {
  @Action(TrendAction)
  add({ getState, setState }: StateContext<TrendStateModel>, { payload }: TrendAction) {
    const state = getState();
    setState({ items: [ ...state.items, payload ] });
  }
}
