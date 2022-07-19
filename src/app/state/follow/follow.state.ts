import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { FollowAction } from './follow.actions';

export class FollowStateModel {
  public items!: string[];
}

const defaults = {
  items: []
};

@State<FollowStateModel>({
  name: 'follow',
  defaults
})
@Injectable()
export class FollowState {
  @Action(FollowAction)
  add({ getState, setState }: StateContext<FollowStateModel>, { payload }: FollowAction) {
    const state = getState();
    setState({ items: [ ...state.items, payload ] });
  }
}
