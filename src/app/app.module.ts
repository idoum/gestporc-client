import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilContainerComponent } from './acceuil/acceuil-container/acceuil-container.component';
import { AcceuilHeaderComponent } from './acceuil/acceuil-header/acceuil-header.component';
import { AcceuilFooterComponent } from './acceuil/acceuil-footer/acceuil-footer.component';
import { DonneebaseContainerComponent } from './donneebase/donneebase-container/donneebase-container.component';
import { DonneebaseMenuComponent } from './donneebase/donneebase-menu/donneebase-menu.component';
import { TypeContainerComponent } from './donneebase/type/type-container/type-container.component';
import { TypeListComponent } from './donneebase/type/type-list/type-list.component';
import { TypeDetailComponent } from './donneebase/type/type-detail/type-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';    
import { TypeEditModalComponent } from './donneebase/type/type-edit-modal/type-edit-modal.component';
import { RaceContainerComponent } from './donneebase/race/race-container/race-container.component';
import { RaceListComponent } from './donneebase/race/race-list/race-list.component';
import { RaceEditModalComponent } from './donneebase/race/race-edit-modal/race-edit-modal.component';
import { RaceDetailComponent } from './donneebase/race/race-detail/race-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilContainerComponent,
    AcceuilHeaderComponent,
    AcceuilFooterComponent,
    DonneebaseContainerComponent,
    DonneebaseMenuComponent,
    TypeContainerComponent,
    TypeListComponent,
    TypeDetailComponent,
    TypeEditModalComponent,
    RaceContainerComponent,
    RaceListComponent,
    RaceEditModalComponent,
    RaceDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
