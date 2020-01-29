import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./home/home.module").then(r => r.HomeModule)
  },
  {
    path: "crud",
    loadChildren: () => import("./crud/crud.module").then(r => r.CrudModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Modulo1RoutingModule {}
