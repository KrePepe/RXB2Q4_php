import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ElsoService} from "../elso.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    public service: ElsoService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    if (this.service.adatok.length === 0){
      this.service.fetch().subscribe(
        (data: any) => this.service.adatok = data.results,
        error => console.log(error),
        () => console.log("jo list component ts 21")
      )
    }
  }

  Modifying(i: number): void{
    console.log("drei kurva"+i)
    this.router.navigate(['modify', i])
  }
  Delete(i: number): void{
    this.service.adatok.splice(i,1);
    console.log("delet kurva"+i)

  }
}
