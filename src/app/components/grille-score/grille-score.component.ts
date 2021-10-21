import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grille-score',
  templateUrl: './grille-score.component.html',
  styleUrls: ['./grille-score.component.scss']
})
export class GrilleScoreComponent implements OnInit {

  listeJoueurs = [
    'Toto', 'Titi'
  ];
  listeScore = [
    {
      id: 1,
      scores: [1, 2],
    },
    {
      id: 2,
      scores: [2, 3],
    },
  ];

  constructor(
  ) { }

  ngOnInit(): void {
  }

  getTotal(i: number) {
    return this.listeScore.map(j => j.scores[i]).reduce((acc, value) => acc + value, 0);
  }

}
