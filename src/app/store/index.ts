import { joueurFeatureKey, JoueurListStateEntity } from './entities/joueur.entity';
import { joueurReducer } from './reducers/joueur.reducer';

export interface AppState {
    joueurs: JoueurListStateEntity;
}

export const rootReducer = {
    [joueurFeatureKey]: joueurReducer,
};
