import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Joueur } from 'src/app/model/joueur';

export interface JoueurListStateEntity extends EntityState<Joueur> {
    current?: Joueur;
}

export const joueurFeatureKey = 'joueurs';

export const JoueurLIstAdapter: EntityAdapter<Joueur> = createEntityAdapter<Joueur>({
    sortComparer: false,
});

export const initialState: JoueurListStateEntity = JoueurLIstAdapter.getInitialState({
});

export const {
    selectIds: selectJoueursIds,
    selectEntities: selectJoueursEntities,
    selectAll: selectAllJoueurs,
    selectTotal: selectTotalJoueurs,
} = JoueurLIstAdapter.getSelectors();
