import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ScoreService } from 'src/app/services/score/score.service';

@Component({
  selector: 'app-formulaire-joueurs',
  templateUrl: './formulaire-joueurs.component.html',
  styleUrls: ['./formulaire-joueurs.component.scss']
})
export class FormulaireJoueursComponent implements OnInit, OnDestroy {
  formulaire: FormGroup;
  subscriptions: Subscription | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private scoreService: ScoreService,
    private router: Router,
  ) {
    this.formulaire = this.formBuilder.group({
      nombreJoueurs: [2, Validators.required],
      listeJoueurs: this.formBuilder.array([
        this.formBuilder.control('')
      ]),
    });
  }

  ngOnInit(): void {
    // this.subscriptions = this.formulaire.get('nombreJoueurs').valueChanges.subscribe(
    //   val => {
    //     if (val && val >= 0) {
    //       this.updateNombreJoueurs(val);
    //     }
    //   }
    // );
  }

  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

  get listeJoueurs() {
    return this.formulaire.get('listeJoueurs') as FormArray;
  }

  updateNombreJoueurs(nbJoueurs: number) {
    while (this.listeJoueurs.length > nbJoueurs) {
      this.supprimerJoueur();
    }
    while (this.listeJoueurs.length < nbJoueurs) {
      this.ajouterJoueur();
    }
  }

  private supprimerJoueur() {
    this.listeJoueurs.removeAt(this.listeJoueurs.length - 1);
  }

  private ajouterJoueur() {
    this.listeJoueurs.push(this.formBuilder.control(''));
  }

  onSubmit() {
    // this.scoreService.creerNouvellePartie(this.listeJoueurs.value);
    this.router.navigate(['/']);
  }
}
