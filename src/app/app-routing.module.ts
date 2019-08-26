import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EzloginComponent } from './ezlogin/ezlogin.component';
import { EzregisterComponent } from './ezregister/ezregister.component';
import { AppComponent } from './app.component';
import { EzstayhomeComponent } from './ezstayhome/ezstayhome.component';


const routes: Routes = [
  {path:"",component:EzstayhomeComponent},
  {path:"login",component:EzloginComponent},
  {path:"register",component:EzregisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
