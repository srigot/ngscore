import { createAction, props } from '@ngrx/store';

export const initScore = createAction(
    '[score] Initialisation',
    props<{ noms: string[] }>()
);

export const addScore = createAction(
    '[score] Ajout score',
    props<{ points: number }>()
);
