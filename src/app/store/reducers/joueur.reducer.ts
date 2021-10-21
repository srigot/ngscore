import { createReducer, on, Action } from '@ngrx/store';
import { Joueur } from '../../model/joueur';
import * as JoueurAction from '../actions/joueur.action';
import { initialState, JoueurLIstAdapter } from '../entities/joueur.entity';

export const joueurReducer = createReducer(
    initialState,
    on(JoueurAction.initScoreAction,
        (state, { items }: { items: Joueur[] }) => ({
            ...JoueurLIstAdapter.addMany(items, state),
            current: items[0],
        })
    ),
);
