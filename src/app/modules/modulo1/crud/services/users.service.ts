import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {

  private url: string = `${environment.urls.api}/usuarios`;

  constructor(private http: HttpClient) { }

  public fetchUsers = (): Observable<any> => {
    return this.http.get(this.url);
  };
}
