import { ActivatedRoute } from '@angular/router';
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
    private service: ElsoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    var x = this.route.snapshot.paramMap.get('id');
    if (x != null) {
      var y: number = +x;
      this.adat = this.service.adatok[y];
    }
    console.log(x);
  }

  save(): void {
    var x = this.route.snapshot.paramMap.get('id');
    if (x != null) {
      var y: number = +x;
      this.adat = this.service.adatok[y];
      this.service.adatok.splice(y,1);
      this.service.adatok.push(this.adat);
      this.adat = new MyAdat();
    }

  }

}
