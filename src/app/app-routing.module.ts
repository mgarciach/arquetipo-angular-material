import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "modulo1",
    loadChildren: () =>
      import("./modules/modulo1/modulo1.module").then(r => r.Modulo1Module)
  },
  { path: "", redirectTo: "/modulo1", pathMatch: "full" },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
