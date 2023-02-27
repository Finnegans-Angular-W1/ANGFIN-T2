import { Component, OnInit } from "@angular/core";

import { MapBoxService } from "./../../services/map-box.service";
import { ModalState } from "src/app/shared/states/modalState/modal.state";
import { Store } from "@ngrx/store";
import { openModal } from "src/app/shared/states/modalState/modal.actions";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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

  ngOnInit(): void {
    this.map.buildMap();
  }

  openModal() {
    this.store.dispatch(openModal());
  }
}
