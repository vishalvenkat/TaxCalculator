import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div>
              <mat-toolbar class="logo">{{getTitle()}}</mat-toolbar><br />
          
      <mat-card>
         <mat-card-content>
            <div *ngIf="showButton">
                <app-info></app-info><br />
            <div align="center">
            <button mat-raised-button color="primary" *ngIf="showButton" (click)="showButton = false">Get started</button>
            </div>
                
            <div align="right" *ngIf="!image">Click <mat-icon (click) = "image = imageLocation">info</mat-icon> to view how your tax will be calculated.</div>
                  <div align="center" *ngIf="image" class="image-division">
                  <img [src]="image">
              </div>
              
          </div>
          <div *ngIf="!showButton">
              <mat-icon (click)="showButton = true">arrow_back</mat-icon>
              <app-calculator></app-calculator>
          </div>
              </mat-card-content>
          </mat-card>
      </div>    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  image : string;
  imageLocation = '../../assets/Images/InfoImage.jpg';
  title = 'TaxCalculator';
  showButton = true;
  getTitle() {
    return this.title;
  }
}
