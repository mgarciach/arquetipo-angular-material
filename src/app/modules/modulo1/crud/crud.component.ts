import { Component, OnInit } from "@angular/core";
import { UsersService } from './services/users.service';
import { Observable } from 'rxjs';

@Component({
  templateUrl: "./crud.component.html",
  styleUrls: ["./crud.component.scss"]
})
export class CrudComponent implements OnInit {

  fetching: boolean = false;

  usuarios$: Observable<any>;

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.usuarios$ = this.usersService.fetchUsers();
  }

}
