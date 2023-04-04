import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { StartAngularComponent } from './start-angular/start-angular.component';

const routes: Routes = [
  {path:'',redirectTo:'start-angular',pathMatch:'full'},
  {path:'start-angular', component:StartAngularComponent},
  {path:'about' , component:AboutComponent},
  {path:'contact' ,component:ContactComponent},
  {path:'portfolio', component:PortfolioComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
