import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  routes: Routes | undefined;

  constructor(private appRoutingModule: AppRoutingModule){

    this.routes = appRoutingModule.getRoutes();
  }
}
