import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InfoUserService {

  private urlCuentas: string = '../assets/data/cuentas.json';
  private urlDeudas: string = '../assets/data/deudas.json';
  private urlPerfil: string = '../assets/data/perfil.json';

  constructor(private httpClient: HttpClient) { }


  //Obtener datos
  traerListaCuentas() {
    this.httpClient.get<Cuenta>(this.urlCuentas);
  }

  traerListaDeudas(): Observable<Deuda[]> {
    return this.httpClient.get<Deuda[]>(this.urlDeudas);
  }

  traerInfoPerfil(): Observable<Perfil> {
    return this.httpClient.get<Perfil>(this.urlPerfil);
  }

  //Guardar Datos
  guardarNombre(perfil: Perfil): Observable<Perfil> {
    return this.httpClient.post<Perfil>(this.urlPerfil, {
      nombre: perfil.nombre,
      gastado: perfil.gastado,
      saldo: perfil.saldo
    });
  }

  guardarDeuda() {

  }


  //Eliminar Datos
  eliminarDeuda() {

  }

  eliminarCuenta() {

  }

}


// Interfaces

export interface Cuenta {
  nombreCuenta: string;
}

export interface Perfil {
  nombre: string;
  apellidoPat;
  apellidoMat;
  gastado: number;
  saldo: number;
}


export interface Deuda {
  deuda: string;
  cuenta: string;
  cuota: number;
  cuotaRestante: number;
  monto: number;
  fechaDeuda: string;
}



