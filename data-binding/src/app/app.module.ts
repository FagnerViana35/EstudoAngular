import { MeuFormComponent } from './meu-form/meu-form.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindindComponent } from './data-bindind/data-bindind.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MeuFormModule } from './meu-form/meu-form.module';
import { InputPropertiesComponent } from './input-properties/input-properties.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindindComponent,
    InputPropertiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    MeuFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
