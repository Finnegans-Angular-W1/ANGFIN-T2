import { Component, OnInit } from "@angular/core";

import { MapBoxService } from "./../../services/map-box.service";
import { ModalState } from "src/app/shared/states/modalState/modal.state";
import { Store } from "@ngrx/store";
import { openModal } from "src/app/shared/states/modalState/modal.actions";

@Component({
  selector: "app-contacto",
  templateUrl: "./contacto.component.html",
  styleUrls: ["./contacto.component.scss"],
})
export class ContactoComponent implements OnInit {
  title = "Contáctanos";

  modalInfo = { title: "Envíanos tu mensaje", subtitle: "" };

  constructor(private store: Store<ModalState>, private map: MapBoxService) {}

  ngOnInit(): void {
    this.map.buildMap();
  }

  openModal() {
    this.store.dispatch(openModal());
  }
}
