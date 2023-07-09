import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactaComponent } from './pages/contacta/contacta.component';

const routes: Routes = [
  { title: 'Home', path: '', component: HomeComponent},
  { title: 'Contact', path: 'contact', component: ContactaComponent},
  { title: 'About Us', path: 'about-us', component: SobreNosotrosComponent},
  { title: 'Services',path: 'serivices', component: ServiciosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  public getRoutes(): Routes {
    return routes;
  }
}
