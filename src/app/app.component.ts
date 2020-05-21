import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div>
          <mat-toolbar class="logo"><span>{{getTitle()}}</span></mat-toolbar>
          <div *ngIf="showButton" class="Block">
              <app-info></app-info><br />
              <button mat-raised-button color="primary" *ngIf="showButton" (click)="showButton = false">Get started</button>
          </div>
          <div *ngIf="!showButton">
              <app-calculator></app-calculator>
          </div>
      </div>    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaxCalculator';
  showButton = true;
  getTitle() {
    return this.title;
  }
}
