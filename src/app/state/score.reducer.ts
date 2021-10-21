import { createReducer, on, Action } from '@ngrx/store';
import { Joueur } from '../model/joueur';
import { initScore } from './score.actions';

export const initialState: ReadonlyArray<string> = [];

export const scoreReducer = createReducer(
    initialState,
    on(initScore, (state, { noms }) => [...noms])
);
