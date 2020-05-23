import {HttpClient, HttpErrorResponse } from "@angular/common/http";
import {Injectable} from "@angular/core";
//import {} from "src/JsonRules/stage.json";
@Injectable({
  providedIn:'root'
})
export class TaxRulesService {
  slab;
  initialAmount: number;
  balanceAmount;
  taxAmount = 0;
  stageFromJson;
  RulesFromJson;

  constructor(http : HttpClient) {
    http.get('./assets/stage.json').subscribe(data=> {this.stageFromJson = data as string[]},(err:HttpErrorResponse) => {
      alert(err.message);
    });
    http.get('./assets/Rules.json').subscribe(data=>{this.RulesFromJson = data as string[]},(err:HttpErrorResponse) => {
      alert(err.message);
    });
  }

  setSlab(amount: number) {
    for (let arr in this.stageFromJson) {
      if (this.stageFromJson[arr].Amount <= amount) {
        this.slab = this.stageFromJson[arr].stage;
        this.initialAmount = this.stageFromJson[arr].Amount;
        alert(this.slab + ", " + this.initialAmount);
        break;
      }
    }
  }

getTaxAmount(amount : number) {
   this.setSlab(amount);
   this.balanceAmount = amount - this.initialAmount;
  for (let arr in this.RulesFromJson) {
    if (this.RulesFromJson[arr].stage === this.slab) {
      this.taxAmount = this.RulesFromJson[arr].tax * this.balanceAmount;
      this.taxAmount += this.RulesFromJson[arr].BaseTax;
      break;
    }
  }
    return this.taxAmount;
}

 }
