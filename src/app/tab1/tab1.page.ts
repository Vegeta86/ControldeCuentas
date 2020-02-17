import { Component } from '@angular/core';

import { InfoUserService } from '../info-user.service';
import { Plugins } from '@capacitor/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';

const { Storage } = Plugins;


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private nombre: string;
  private apellidoPat:string;
  private apellidoMat:string;
  private gastado: number;
  private saldo: number;
  private editar: boolean = false;



  constructor(private infoUser: InfoUserService, public modalController: ModalController) {

    this.infoUser.traerInfoPerfil().subscribe(res => {
      this.nombre = res.nombre;
      this.apellidoPat = res.apellidoPat;
      this.apellidoMat = res.apellidoMat;
      this.gastado = res.gastado;
      this.saldo = res.saldo;

      this.setObject();
      this.getObject();

    });
  }

  async setObject() {
    await Storage.set({
      key: 'perfilUsuario',
      value: JSON.stringify({
        nombre: this.nombre,
        apellidoPat: this.apellidoPat,
        apellidoMat: this.apellidoMat,
        gastado: this.gastado,
        saldo: this.saldo
      })
    });
  }

  async getObject() {
    const ret = await Storage.get({ key: 'perfilUsuario' });
    const user = JSON.parse(ret.value);
    this.nombre = user.nombre;
    //console.log(user);

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {
        'nombre': this.nombre,
        'apellidoPat': this.apellidoPat,
        'apellidoMat': this.apellidoMat
      }
    });
    return await modal.present();
  }



}
