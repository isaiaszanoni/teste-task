import { Tarefas } from './../model/Tarefas';
import { Usuario } from './../model/Usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost:8080/api/users/login', Usuario)
  }

  register(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost:8080/api/users/register', Usuario)
  }
}
