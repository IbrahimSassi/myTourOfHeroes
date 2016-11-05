/**
 * Created by Ibrahim on 05/11/2016.
 */

import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-hero-detail',
  template: `
      <div *ngIf="heroToDisplay">
        <h2>{{heroToDisplay.name}} details!</h2>
        <div><label>id: </label>{{heroToDisplay.id}}</div>
        <div>
          <label>name: </label>
          <input [(ngModel)]="heroToDisplay.name" placeholder="name"/>
        </div>
      </div>
`
})
export class HeroDetailComponent {
  @Input()
  heroToDisplay: Hero;

}
