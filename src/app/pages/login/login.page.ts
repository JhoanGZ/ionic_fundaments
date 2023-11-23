import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  formDatos ={
    email:'',
    password:''
  }

  constructor() { }

  ngOnInit() {
  }
  onSubmit(x:any){
    console.log("Datos Recibidos. \nEmail: "+x.email+"\nPassword: "+x.password);
  }

}
