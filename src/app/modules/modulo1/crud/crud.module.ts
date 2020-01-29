import { NgModule } from "@angular/core";
import { CrudRoutingModule } from "./crud-routing.module";
import { CrudComponent } from "./crud.component";
import { UsersService } from './services/users.service';
import { SharedModule } from '@shared';

@NgModule({
  imports: [CrudRoutingModule, SharedModule],
  declarations: [CrudComponent],
  providers: [
    UsersService
  ]
})
export class CrudModule { }
