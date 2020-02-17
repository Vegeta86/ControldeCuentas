import { Component } from '@angular/core';
import { InfoUserService, Deuda } from '../info-user.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  private listaDeudas: Deuda[];

  constructor(private infoService: InfoUserService) {
    this.listaDeudas = [];
    this.infoService.traerListaDeudas().subscribe(res => {
      this.listaDeudas = res;
    });

  }

}


