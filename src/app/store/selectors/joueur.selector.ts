import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { selectAllJoueurs } from '../entities/joueur.entity';

export const selectJoueurListState$ = (state: AppState) => state.joueurs;

export const selectAllJoueurs$ = createSelector(
    selectJoueurListState$,
    selectAllJoueurs
);

export const selectCurrentJour$ = createSelector(
    selectJoueurListState$,
    (entitiy) => entitiy.current
);
