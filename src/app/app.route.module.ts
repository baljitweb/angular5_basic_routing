import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import components for routing
import { favsComponent } from './favs/fav.component';
import { allToolsComponent } from './allTools/allTools.component';
import { Route } from '@angular/router/src/config';

//json data from file
import * as data from '../assets/fav.json';

// config routes here and pass json data
const routes: Routes = [
    { 'path': '', redirectTo: 'favs', pathMatch: 'full' },
    { 'path': 'favs', component: favsComponent, data:{'test':data['favourites']} },
    { 'path': 'allTools', component: allToolsComponent },
    { 'path': '**', redirectTo: '/' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { };