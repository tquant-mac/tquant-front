import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { BacktradeAction } from './backtrade.actions';

export class BacktradeStateModel {
  public items!: string[];
}

const defaults = {
  items: []
};

@State<BacktradeStateModel>({
  name: 'backtrade',
  defaults
})
@Injectable()
export class BacktradeState {
  @Action(BacktradeAction)
  add({ getState, setState }: StateContext<BacktradeStateModel>, { payload }: BacktradeAction) {
    const state = getState();
    setState({ items: [ ...state.items, payload ] });
  }
}
