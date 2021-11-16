import { Usuario } from './../model/Usuario';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmPassw: string

  usuarioLogin: Usuario = new Usuario()

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){    
  }

  confirmPassword(event:any){
    this.confirmPassw = event.target.value
  }

  registerUser(){
    console.log(this.usuario.nome);
    console.log(this.usuario.email);

    if(this.usuario.senha != this.confirmPassw){
      alert('Senhas incorretas!')
    }else{
      this.authService.register(this.usuario).subscribe((resp: Usuario) =>{
        this.usuario = resp
        this.router.navigate(['/home'])
        alert('Usuário cadastrado com sucesso!')
      })
    }
  }

  login(){
    this.authService.login(this.usuarioLogin).subscribe((resp: Usuario)=>{
      this.usuarioLogin = resp
      this.router.navigate(['/tasks'])
    }, erro =>{
      if(erro.status == 500){
        alert('Usuário ou senha estão incorretos!')
      }
    })
  }
}
