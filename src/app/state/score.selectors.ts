import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Joueur } from '../model/joueur';
import { AppState } from './app.state';

export const getJoueurState = createFeatureSelector<AppState>('joueurs');

export const selectScore = createSelector(
    getJoueurState,
    (state: AppState) => state.joueurs
);
