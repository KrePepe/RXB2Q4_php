import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {MainComponent} from "./main/main.component";
import {FormComponent} from "./form/form.component";
import {ModifyComponent} from "./modify/modify.component";

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'modify',
    component: ModifyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
