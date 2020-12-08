import { Injectable } from '@angular/core';
import { Joueur } from 'src/app/model/joueur';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  listeJoueurs: Joueur[] | null = null;
  indexJoueurCourant: number | null = null;

  constructor() { }

  get nomJoueurCourant() {
    if (this.indexJoueurCourant != null && this.listeJoueurs != null) {
      return this.listeJoueurs[this.indexJoueurCourant].nom;
    }
    return '';
  }

}
