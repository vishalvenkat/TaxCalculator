import { Component, OnInit } from '@angular/core';
import {TaxRulesService} from "../../Service/CalculateTax/tax-rules.service";
@Component({
  selector: 'app-calculator',
  styleUrls: ['./calculator.component.css'],
  template: `
      <div class="Block">
          <mat-card>
              <mat-card-content>
                  <form>
                      <label for="salary">Enter your annual pay</label>
                      <input type="text" name="salary" id="salary" #salaryInput [ngClass]='bntStyle'
                             (keyup) ="calculateSalary($event)" (keydown)="calculateSalary($event)"><br/>{{validationText}}<br/>
                  </form>
                  <button color="primary" mat-raised-button (click)="getTaxamount(salaryInput.value)">Calculate Tax</button><br />
                  {{taxAmount}}
              </mat-card-content>
          </mat-card>
      </div>
  `
})
export class CalculatorComponent implements OnInit {

  validationText : string;
  bntStyle : string;
test;
salary: number;
  taxAmount;
  constructor(dependency : TaxRulesService) {
     this.test = dependency;
  }

  ngOnInit() {
  }
  // Set the location of the image when clicked.

calculateSalary(event) {
   if(isNaN(event.target.value) || this.checkDecimal(event.target.value)) {
     this.showInvalidMessage();
  } else {
     this.showValidMessage(event);
   }
   // return event.target.value;
}
checkDecimal(value) {
    let number = 0;
    let flag = false;
for (let i =0; i< value.length; i++) {
  if(value.charAt(i) === '.') flag = true;
  if(flag) number++;
}
    return number > 3;
}

showInvalidMessage() {
  this.bntStyle = 'wrong-input';
  this.validationText = 'Enter valid number';
}
showValidMessage(event) {
  this.bntStyle = 'correct-input';
  this.validationText = '';
  this.salary = event.target.value;
}
getTaxamount(salaryInput) {
    if (!isNaN(salaryInput)){
      this.taxAmount = this.makeTaxAmount(this.test.getTaxAmount(salaryInput));
    }

    //return this.taxAmount;
}
makeTaxAmount(Amount) {
    return "You need to pay : $" + Amount + " as annual tax amount";
}
}
