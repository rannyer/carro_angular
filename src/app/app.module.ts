import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardCarroComponent } from './components/card-carro/card-carro.component';
import { PaginaCarroComponent } from './components/pagina-carro/pagina-carro.component';

@NgModule({
  declarations: [
    AppComponent,
    CardCarroComponent,
    PaginaCarroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
