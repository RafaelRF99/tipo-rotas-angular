import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { EstudoComponent } from './views/estudo/estudo.component';
import { ProjetoComponent } from './views/projeto/projeto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EstudoComponent,
    ProjetoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
