import { Component, OnInit } from "@angular/core";

import { MapBoxService } from "./../../services/map-box.service";
import { ModalState } from "src/app/shared/states/modalState/modal.state";
import { Store } from "@ngrx/store";
import { openModal } from "src/app/shared/states/modalState/modal.actions";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { showAlert } from "src/app/core/state/states/alertState/alert.actions";

@Component({
  selector: "app-contacto",
  templateUrl: "./contacto.component.html",
  styleUrls: ["./contacto.component.scss"],
})
export class ContactoComponent implements OnInit {
  title = "Contáctanos";
  form: FormGroup;
  modalInfo = { title: "Envíanos tu mensaje", subtitle: "" };

  constructor(private store: Store<ModalState>, private map: MapBoxService, private fb: FormBuilder) {
    this.form = this.fb.group({
      titulo: ['', [Validators.required]],
      descripcion: ['', Validators.required],
    });
  }
  
 onEnviar() {
  this.store.dispatch(showAlert({message:'La solicitud de contacto ha sido enviada. En breve nos comunicaremos', alertType:'success'}));
 }

  ngOnInit(): void {
    this.map.buildMap();
  }

  openModal() {
    this.store.dispatch(openModal());
  }
}
