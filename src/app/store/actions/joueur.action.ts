import { createAction, props } from '@ngrx/store';
import { Joueur } from 'src/app/model/joueur';

export const initScoreAction = createAction(
    '[score] Initialisation',
    props<{ items: Joueur[] }>()
);

export const addScoreAction = createAction(
    '[score] Ajout score',
    props<{ points: number }>()
);
