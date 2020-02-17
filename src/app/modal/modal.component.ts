import { Component, OnInit, Input } from "@angular/core";
import { NavParams, ModalController } from "@ionic/angular";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements OnInit {
  @Input() nombre: string;
  @Input() apellidoPat: string;
  @Input() apellidoMat: string;
  @Input() middleInitial: string;

  constructor(navParams: NavParams, public modalController: ModalController) {
    console.log(navParams.get("nombre"));
  }

  ngOnInit() {}

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
