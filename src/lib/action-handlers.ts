import {
  ofAction,
  ofActionCanceled,
  ofActionDispatched,
  ofActionErrored,
  ofActionSuccessful
} from '@ngxs/store';
import { EntityActionType, NGXS_META_KEY } from './internal';
import { EntityState } from './entity-state';
import { Type } from '@angular/core';

export const ofEntityAction = (
  state: Type<EntityState<any>>,
  actionType: EntityActionType
) => {
  const statePath = state[NGXS_META_KEY].path;
  const type = `[${statePath}] ${actionType}`;
  return ofAction({
    type: type
  });
};

export const ofEntityActionDispatched = (
  state: Type<EntityState<any>>,
  actionType: EntityActionType
) => {
  const statePath = state[NGXS_META_KEY].path;
  const type = `[${statePath}] ${actionType}`;
  return ofActionDispatched({
    type: type
  });
};

export const ofEntityActionSuccessful = (
  state: Type<EntityState<any>>,
  actionType: EntityActionType
) => {
  const statePath = state[NGXS_META_KEY].path;
  const type = `[${statePath}] ${actionType}`;
  return ofActionSuccessful({
    type: type
  });
};

export const ofEntityActionCanceled = (
  state: Type<EntityState<any>>,
  actionType: EntityActionType
) => {
  const statePath = state[NGXS_META_KEY].path;
  const type = `[${statePath}] ${actionType}`;
  return ofActionCanceled({
    type: type
  });
};

export const ofEntityActionErrored = (
  state: Type<EntityState<any>>,
  actionType: EntityActionType
) => {
  const statePath = state[NGXS_META_KEY].path;
  const type = `[${statePath}] ${actionType}`;
  return ofActionErrored({
    type: type
  });
};
