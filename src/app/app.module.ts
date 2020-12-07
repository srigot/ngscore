import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './pages/home/home.component';
import { NouvellePartieComponent } from './pages/nouvelle-partie/nouvelle-partie.component';
import { AjoutScoreComponent } from './components/ajout-score/ajout-score.component';
import { BoutonUndoComponent } from './components/bouton-undo/bouton-undo.component';
import { FormulaireJoueursComponent } from './components/formulaire-joueurs/formulaire-joueurs.component';
import { GrilleScoreComponent } from './components/grille-score/grille-score.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NouvellePartieComponent,
    AjoutScoreComponent,
    BoutonUndoComponent,
    FormulaireJoueursComponent,
    GrilleScoreComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
