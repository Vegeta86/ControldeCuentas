import { Component } from '@angular/core';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  private fechadeHoy: Date;
  private dia: number;
  private mes: number;
  private year: number;

  constructor() {

    this.fechadeHoy = new Date();
    this.dia = this.fechadeHoy.getDate();
    this.mes = this.fechadeHoy.getMonth() + 1;
    this.year = this.fechadeHoy.getFullYear();

  }

}
