import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//import routermodule for routing
import {AppRoutingModule} from './app.route.module';
import { favsComponent } from './favs/fav.component';
import { allToolsComponent } from './allTools/allTools.component';


@NgModule({
  declarations: [
    AppComponent,
    favsComponent,
    allToolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
