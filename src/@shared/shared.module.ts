import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ComponentsModule } from "./components/components.module";

@NgModule({
  imports: [FormsModule, CommonModule, ComponentsModule],
  declarations: [],
  exports: [FormsModule, CommonModule, ComponentsModule]
})
export class SharedModule {}
