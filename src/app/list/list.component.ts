import { Component, OnInit } from '@angular/core';
import {ElsoService} from "../elso.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    public service: ElsoService
  ) {
  }

  ngOnInit(): void {
    if (this.service.adatok.length === 0){
      this.service.fetch().subscribe(
        (data: any) => this.service.adatok = data.results,
        error => console.log(error),
        () => console.log("jo list componentn ts 21")
      )
    }
  }

  Modifying(i: number): void{
    console.log("drei kurva"+i)
  }
}
