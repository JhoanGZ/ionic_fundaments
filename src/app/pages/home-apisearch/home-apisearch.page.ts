import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home-apisearch',
  templateUrl: './home-apisearch.page.html',
  styleUrls: ['./home-apisearch.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomeApisearchPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
