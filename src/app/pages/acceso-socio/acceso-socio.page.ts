import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-acceso-socio',
  templateUrl: './acceso-socio.page.html',
  styleUrls: ['./acceso-socio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AccesoSocioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

