import { Component, OnInit } from "@angular/core";

import { HttpService } from "src/app/core/services/http.service";

@Component({
  selector: "app-cargar-gastos",
  templateUrl: "./cargar-gastos.component.html",
  styleUrls: ["./cargar-gastos.component.scss"],
})
export class CargarGastosComponent implements OnInit {
  constructor(private http: HttpService) {}

  ngOnInit(): void {}
}
