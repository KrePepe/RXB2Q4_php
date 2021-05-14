import { Component, OnInit } from '@angular/core';
import {MyAdat} from "../adat.model";
import {ElsoService} from "../elso.service";

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {adat= new MyAdat();

  constructor(
    private service: ElsoService
  ) { }

  ngOnInit(): void {
    this.adat = this.service.adatom[2];
  }

  save(): void{
    this.service.adatom.push(this.adat);
    this.adat = new MyAdat();
  }

  Modifying(): void{
    this.service.adatom[3] = this.service.adatom[3]
  }

}
