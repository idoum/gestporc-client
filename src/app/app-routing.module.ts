import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilContainerComponent } from './acceuil/acceuil-container/acceuil-container.component';
import { DonneebaseContainerComponent } from './donneebase/donneebase-container/donneebase-container.component';
import { TypeContainerComponent } from './donneebase/type/type-container/type-container.component';
import { RaceContainerComponent } from './donneebase/race/race-container/race-container.component';

const routes: Routes = [

  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AcceuilContainerComponent},
  {
    path: 'doneebase', component: DonneebaseContainerComponent,
    children: [
      {path: '', redirectTo:'type', pathMatch:'full'},
      { path: 'type', component: TypeContainerComponent },
      { path: 'race', component: RaceContainerComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
