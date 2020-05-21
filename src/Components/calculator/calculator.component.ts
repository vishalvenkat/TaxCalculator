import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  template: `
      <div class="Block">
          <form>
              Enter your annual salary: <input type="number" name="income"  (keyup)="taxAmount = calculateSalary($event)"/><br>
              Tax to be paid: {{getTaxAmount()}}<br />
          </form>
          <div *ngIf="!image">Click <mat-icon (click) = "image = imageLocation">info</mat-icon> to view how your tax will be calculated.</div>
          <div *ngIf="image" class="image-division">
              <img [src]="image">
          </div>
          
      </div>
  `,
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  image : string;
  imageLocation = '../../assets/Images/InfoImage.jpg';

  taxAmount = 0;
  constructor() { }

  ngOnInit() {
  }
  // Set the location of the image when clicked.
  setImage() {
    this.image = this.imageLocation;
  }
calculateSalary(event) {
    // Todo: Add business logic here to calculate the Tax amount.
  // This code just returns the actual salary entered in the box.
    return event.target.value;
}
getTaxAmount() {
    return this.taxAmount;
}
}
