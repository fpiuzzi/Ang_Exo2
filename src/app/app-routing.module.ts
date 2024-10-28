import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactComponent} from "./contact/contact.component";
import {BlogComponent} from "./blog/blog.component";
import {SymptomesComponent} from "./symptomes/symptomes.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'symptomes', component: SymptomesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: '**', redirectTo: '/accueil' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
