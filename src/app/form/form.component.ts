import { Component, OnInit } from '@angular/core';
import {MyAdat} from "../adat.model";
import {ElsoService} from "../elso.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  adat= new MyAdat();

  constructor(
    private service: ElsoService
  ) { }

  ngOnInit(): void {
  }

  save(): void{
    this.service.adatok.push(this.adat);
    this.adat = new MyAdat();
  }

}
