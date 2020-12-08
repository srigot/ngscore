import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/services/score/score.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(
    public scoreService: ScoreService,
  ) { }

  ngOnInit(): void {
  }

}
