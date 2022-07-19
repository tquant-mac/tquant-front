import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { StrategiesAction } from './strategies.actions';

export class StrategiesStateModel {
  public items!: string[];
}

const defaults = {
  items: []
};

@State<StrategiesStateModel>({
  name: 'strategies',
  defaults
})
@Injectable()
export class StrategiesState {
  @Action(StrategiesAction)
  add({ getState, setState }: StateContext<StrategiesStateModel>, { payload }: StrategiesAction) {
    const state = getState();
    setState({ items: [ ...state.items, payload ] });
  }
}
