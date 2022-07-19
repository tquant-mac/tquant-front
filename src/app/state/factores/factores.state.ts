import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { FactoresAction } from './factores.actions';

export class FactoresStateModel {
  public items!: string[];
}

const defaults = {
  items: []
};

@State<FactoresStateModel>({
  name: 'factores',
  defaults
})
@Injectable()
export class FactoresState {
  @Action(FactoresAction)
  add({ getState, setState }: StateContext<FactoresStateModel>, { payload }: FactoresAction) {
    const state = getState();
    setState({ items: [ ...state.items, payload ] });
  }
}
