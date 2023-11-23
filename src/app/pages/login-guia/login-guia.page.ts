import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-guia',
  templateUrl: './login-guia.page.html',
  styleUrls: ['./login-guia.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class LoginGuiaPage implements OnInit {

  formDatos ={
    usuario:'',
    password:'',
  }

  mensajeError: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(x:any){
    if(x.usuario == "Admin" && x.password =="12345"){
      console.log("Datos enviados. \nUsuario: "+x.usuario+"\nPassword: "+x.password);
      this.mensajeError = '';
      this.router.navigate(['/acceso-socio']);
    } else {
      console.log('Datos Incorrectos');
      this.mensajeError = 'Usuario y Contraseña Incorrectos';
    }
  }
}
