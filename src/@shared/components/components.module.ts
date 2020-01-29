import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AngularMaterialModule } from '../modules/angular-material.module';
// components
import { MenuComponent } from "./menu/menu.component";
import { DataGridComponent } from './data-grid/data-grid.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutHeaderComponent } from './layout/layout-header/layout-header.component';


@NgModule({
  imports: [CommonModule, RouterModule, AngularMaterialModule],
  declarations: [MenuComponent, DataGridComponent, LayoutComponent, LayoutHeaderComponent],
  exports: [MenuComponent, DataGridComponent, LayoutComponent, LayoutHeaderComponent]
})
export class ComponentsModule { }
